import { auth } from '$lib/server/auth';
import { generateId } from 'lucia';
import type { RouteHandler } from 'svelte-route';

export const post: RouteHandler = async ({ request }) => {
  const data = await request.json();
  const { username, email, password } = data;
  
  if (!username || !email || !password || 
      typeof username !== 'string' || 
      typeof email !== 'string' || 
      typeof password !== 'string') {
    return {
      status: 400,
      body: {
        error: 'All fields are required',
        fields: {
          username: username ? '' : 'Username is required',
          email: email ? '' : 'Email is required',
          password: password ? '' : 'Password is required'
        }
      }
    };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      status: 400,
      body: {
        error: 'Invalid email format',
        fields: { email: 'Please enter a valid email address' }
      }
    };
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

    return {
      status: 200,
      body: { userId, username },
      headers: {
        'Set-Cookie': session.cookie.serialize()
      }
    };
  } catch (e) {
    return {
      status: 400,
      body: {
        error: 'Username already taken'
      }
    };
  }
};
