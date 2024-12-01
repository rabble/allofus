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
    locations: ["National"],
    logo: "data:image/png;base64,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" 
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
    },
    logo: "data:image/png;base64,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" 
  },
  // Add other original organizations here...
];