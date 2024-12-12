import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { reports } from '$lib/data/reportsContent';
import { organizations } from '$lib/data/organizations';

export const load: PageServerLoad = async ({ params }) => {
  const report = reports.find(r => r.id === params.id);
  
  if (!report) {
    throw error(404, 'Report not found');
  }

  const organizationName = organizations.find(
    org => org.id === report.organizationId
  )?.name || 'Unknown Organization';

  return {
    report,
    organizationName
  };
};
