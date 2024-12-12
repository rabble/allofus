import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    if (!name || !email || !message) {
      return fail(400, { 
        error: 'All fields are required',
        name: name as string,
        email: email as string,
        message: message as string
      });
    }

    try {
      // Add your email sending logic here
      // For example, using nodemailer or any other email service
      
      return {
        success: true,
        message: 'Your message has been sent successfully!'
      };
    } catch (error) {
      return fail(500, {
        error: 'Failed to send message',
        name: name as string,
        email: email as string,
        message: message as string
      });
    }
  }
} satisfies Actions;
