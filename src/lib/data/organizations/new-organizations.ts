import type { Organization } from '../types';

export const newOrganizations: Organization[] = [
  {
    id: "peoples-action",
    name: "People's Action",
    description: "A national network of grassroots organizations advocating for racial, economic, and gender justice.",
    category: "Multi-Issue",
    website: "https://peoplesaction.org",
    focusAreas: ["racial", "economic", "community"],
    engagementTypes: ["in-person", "event planning", "outreach"],
    locations: ["National"],
    logo: "https://can2-prod.s3.amazonaws.com/page_wrappers/logos/000/004/335/original/PeoplesActionLogo.png"  }
  // Remove new-economy-coalition since it's already in economic-organizations.ts
];