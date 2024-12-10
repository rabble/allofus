import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
import type { RequestHandler } from './$types';
import { serializeOrganization, deserializeOrganization } from '$lib/utils/organizationHelpers';

const prisma = new PrismaClient();

export const GET: RequestHandler = async ({ url }) => {
  const organizations = await prisma.organization.findMany({
    where: {
      approved: true
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
      createdById: session.user.id
    }
  });
  
  return json(deserializeOrganization(organization));
}; 