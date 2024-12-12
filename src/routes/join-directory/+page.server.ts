import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load: PageServerLoad = async () => {
  // Add any initial data loading here if needed
  return {};
};

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    
    const orgName = formData.get('orgName');
    const location = formData.get('location');
    const contactEmail = formData.get('contactEmail');
    const position = formData.get('position');
    const orgEmail = formData.get('orgEmail');
    const projects = formData.get('projects');
    const description = formData.get('description');
    const website = formData.get('website');
    const focusAreas = formData.getAll('focusAreas');
    const engagementTypes = formData.getAll('engagementTypes');

    // Validate required fields
    if (!orgName || !location || !contactEmail || !position || !orgEmail || !description || !website) {
      return fail(400, {
        error: 'All fields are required',
        data: Object.fromEntries(formData)
      });
    }

    try {
      // Create organization request in database
      const organizationRequest = await prisma.organizationRequest.create({
        data: {
          name: orgName.toString(),
          location: location.toString(),
          contactEmail: contactEmail.toString(),
          position: position.toString(),
          orgEmail: orgEmail.toString(),
          projects: projects?.toString() || '',
          description: description.toString(),
          website: website.toString(),
          focusAreas: focusAreas.map(area => area.toString()),
          engagementTypes: engagementTypes.map(type => type.toString()),
          status: 'PENDING'
        }
      });

      // Could add email notification here

      return {
        success: 'Thank you for your submission. We will review your application and contact you soon.',
        data: organizationRequest
      };
    } catch (error) {
      console.error('Failed to submit organization request:', error);
      return fail(500, {
        error: 'Failed to submit organization request. Please try again later.',
        data: Object.fromEntries(formData)
      });
    }
  }
} satisfies Actions;
