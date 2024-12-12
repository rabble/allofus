import type { PageServerLoad } from './$types';
import { socialPosts } from '$lib/data/socialContent';
import { reports } from '$lib/data/reportsContent';
import { organizations } from '$lib/data/organizations';

export const load: PageServerLoad = async () => {
  // Sort posts and reports by date
  const sortedPosts = [...socialPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const sortedReports = [...reports].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    posts: sortedPosts,
    reports: sortedReports,
    organizations
  };
};
