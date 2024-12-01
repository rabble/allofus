import type { Organization } from '../types';

export const communityOrganizations: Organization[] = [
  {
    id: "black-food-justice",
    name: "National Black Food & Justice Alliance",
    description: "Organizes for Black food and land, working towards Black liberation and self-determination.",
    category: "Food Justice",
    website: "https://blackfoodjustice.org",
    focusAreas: ["food", "racial", "community"],
    engagementTypes: ["in-person", "online", "outreach", "event planning"],
    locations: ["National"]
  },
  {
    id: "bold",
    name: "Black Organizing for Leadership and Dignity (BOLD)",
    description: "Develops Black organizers to build a social justice infrastructure rooted in Black communities.",
    category: "Leadership Development",
    website: "https://boldorganizing.org",
    focusAreas: ["racial", "community"],
    engagementTypes: ["in-person", "online", "outreach", "event planning"],
    locations: ["National"]
  },
  {
    id: "national-bail-out",
    name: "National Bail Out",
    description: "A Black-led collective organizing to end systems of pretrial detention and mass incarceration.",
    category: "Criminal Justice",
    website: "https://www.nationalbailout.org",
    focusAreas: ["racial", "legal", "community"],
    engagementTypes: ["in-person", "online", "outreach", "fundraising"],
    locations: ["National"]
  }
  // Removed duplicate transgender-law-center entry
];