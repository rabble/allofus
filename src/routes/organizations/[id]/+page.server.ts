import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { organizations } from '$lib/data/organizations';
import { socialPosts } from '$lib/data/socialContent';
import { reports } from '$lib/data/reportsContent';

export const load: PageServerLoad = async ({ params }) => {
  const organization = organizations.find(org => org.id === params.id);
  
  if (!organization) {
    throw error(404, 'Organization not found');
  }

  const organizationPosts = socialPosts.filter(post => post.organizationId === params.id);
  const organizationReports = reports.filter(report => report.organizationId === params.id);
  
  function findRelatedOrganizations(currentOrgId: string) {
    return organizations
      .filter(org => org.id !== currentOrgId)
      .map(org => {
        const commonFocusAreas = org.focusAreas.filter(area => 
          organization.focusAreas.includes(area)
        ).length;
        const commonEngagementTypes = org.engagementTypes.filter(type => 
          organization.engagementTypes.includes(type)
        ).length;
        const similarityScore = commonFocusAreas + commonEngagementTypes;
        return { ...org, similarityScore };
      })
      .sort((a, b) => b.similarityScore - a.similarityScore)
      .slice(0, 10);
  }

  const relatedOrganizations = findRelatedOrganizations(params.id);

  return {
    organization,
    organizationPosts,
    organizationReports,
    relatedOrganizations
  };
};
