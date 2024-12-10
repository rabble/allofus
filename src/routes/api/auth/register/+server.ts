import { auth } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { generateId } from 'lucia';

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  const { username, email, password } = data;
  
  if (!username || !email || !password || 
      typeof username !== 'string' || 
      typeof email !== 'string' || 
      typeof password !== 'string') {
    return new Response(JSON.stringify({
      error: 'All fields are required',
      fields: {
        username: username ? '' : 'Username is required',
        email: email ? '' : 'Email is required',
        password: password ? '' : 'Password is required'
      }
    }), { 
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({
      error: 'Invalid email format',
      fields: { email: 'Please enter a valid email address' }
    }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const userId = generateId(15);
    
    await auth.createUser({
      userId,
      key: {
        providerId: 'username',
        providerUserId: username,
        password
      },
      attributes: {
        username,
        email
      }
    });

    const session = await auth.createSession({
      userId,
      attributes: {}
    });

    return new Response(JSON.stringify({ 
      userId,
      username
    }), { 
      status: 200,
      headers: {
        'Set-Cookie': session.cookie.serialize()
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({
      error: 'Username already taken'
    }), { 
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 