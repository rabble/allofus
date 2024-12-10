import type { RequestHandler } from '@sveltejs/kit';
import { auth } from '$lib/server/auth';

export const requireAdmin: RequestHandler = async ({ request, locals }) => {
  const session = await locals.auth.validate();
  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  const user = await auth.getUser(session.user.userId);
  if (!user.isAdmin) {
    return new Response('Forbidden', { status: 403 });
  }
};

export const isUserAdmin = async (userId: string) => {
  const user = await auth.getUser(userId);
  return user.isAdmin;
}; 