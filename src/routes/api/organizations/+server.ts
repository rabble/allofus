import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
import type { RequestHandler } from './$types';
import { serializeOrganization, deserializeOrganization } from '$lib/utils/organizationHelpers';
import { requireAdmin } from '$lib/server/adminAuth';

const prisma = new PrismaClient();

export const GET: RequestHandler = async ({ url, locals }) => {
  const session = await locals.auth.validate();
  
  // If user is not logged in, only show approved organizations
  if (!session) {
    const organizations = await prisma.organization.findMany({
      where: { approved: true }
    });
    return json(organizations.map(deserializeOrganization));
  }

  // If user is admin, show all organizations
  const user = await auth.getUser(session.user.userId);
  if (user.isAdmin) {
    const organizations = await prisma.organization.findMany();
    return json(organizations.map(deserializeOrganization));
  }

  // Otherwise, show approved organizations and user's own organizations
  const organizations = await prisma.organization.findMany({
    where: {
      OR: [
        { approved: true },
        { createdById: session.user.userId }
      ]
    }
  });
  
  return json(organizations.map(deserializeOrganization));
};

export const POST: RequestHandler = async ({ request, locals }) => {
  const session = await locals.auth.validate();
  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  const data = await request.json();
  
  const organization = await prisma.organization.create({
    data: {
      ...serializeOrganization(data),
      createdById: session.user.userId,
      // Only admins can create pre-approved organizations
      approved: (await isUserAdmin(session.user.userId)) ? data.approved ?? false : false
    }
  });
  
  return json(deserializeOrganization(organization));
};

// Add PUT endpoint for editing organizations
export const PUT: RequestHandler = async ({ request, locals, params }) => {
  const session = await locals.auth.validate();
  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { id } = params;
  const data = await request.json();

  // Check if user is admin or organization owner
  const organization = await prisma.organization.findUnique({
    where: { id }
  });

  if (!organization) {
    return new Response('Organization not found', { status: 404 });
  }

  const isAdmin = await isUserAdmin(session.user.userId);
  if (!isAdmin && organization.createdById !== session.user.userId) {
    return new Response('Forbidden', { status: 403 });
  }

  const updated = await prisma.organization.update({
    where: { id },
    data: {
      ...serializeOrganization(data),
      // Only admins can update approval status
      approved: isAdmin ? data.approved : organization.approved
    }
  });

  return json(deserializeOrganization(updated));
};