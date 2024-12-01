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
    logo: "https://peoplesaction.org/wp-content/uploads/2019/06/PA_FacebookLogo_180x180.jpg"
  }
  // Remove new-economy-coalition since it's already in economic-organizations.ts
];