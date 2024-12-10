import { auth } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, locals }) => {
  const form = await request.formData();
  const username = form.get('username');
  const password = form.get('password');
  
  if (
    typeof username !== 'string' ||
    typeof password !== 'string'
  ) {
    return new Response('Invalid form data', { status: 400 });
  }

  try {
    const key = await auth.useKey(
      'username',
      username,
      password
    );
    const session = await auth.createSession({
      userId: key.userId,
      attributes: {}
    });
    locals.auth.setSession(session);
    return new Response('Success', { status: 200 });
  } catch {
    return new Response('Invalid credentials', { status: 400 });
  }
}; 