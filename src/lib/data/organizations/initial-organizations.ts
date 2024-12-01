import type { Organization } from '../types';

export const initialOrganizations: Organization[] = [
  {
    id: "right-to-city",
    name: "Right to the City",
    description: "A national alliance advocating for housing rights and urban justice, focusing on combating gentrification and displacement.",
    category: "Multi-Issue",
    website: "http://righttothecity.org",
    focusAreas: ["housing", "racial", "economic", "community"],
    engagementTypes: ["in-person", "online", "event planning", "outreach"],
    locations: ["National"]
  },
  {
    id: "united-we-dream",
    name: "United We Dream",
    description: "The largest immigrant youth-led organization in the U.S., empowering young immigrants and advocating for immigration reforms.",
    category: "Immigrant Rights",
    website: "https://unitedwedream.org",
    focusAreas: ["immigration", "youth", "racial"],
    engagementTypes: ["in-person", "online", "outreach", "event planning"],
    locations: ["National"],
    contact: {
      email: "ayah@unitedwedream.org"
    }
  },
  // Add other original organizations here...
];