import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
import type { RequestHandler } from './$types';
import { deserializeOrganization } from '$lib/utils/organizationHelpers';

const prisma = new PrismaClient();

export const GET: RequestHandler = async ({ locals }) => {
  const session = await locals.auth.validate();
  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  const organizations = await prisma.organization.findMany({
    where: {
      createdById: session.user.userId
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
  
  return json(organizations.map(deserializeOrganization));
}; 