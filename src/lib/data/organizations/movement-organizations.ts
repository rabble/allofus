import type { Organization } from '../types';

export const movementOrganizations: Organization[] = [
  {
    id: "350-org",
    name: "350.org",
    description: "An international movement working to end the age of fossil fuels and build a world of community-led renewable energy solutions.",
    category: "Environmental",
    website: "https://350.org",
    focusAreas: ["climate", "community"],
    engagementTypes: ["in-person", "online", "event planning", "outreach"],
    locations: ["International", "USA"]
  },
  {
    id: "blm-foundation",
    name: "Black Lives Matter Global Network Foundation",
    description: "A global organization in the U.S., U.K., and Canada, whose mission is to eradicate white supremacy and build local power to intervene in violence inflicted on Black communities.",
    category: "Racial Justice",
    website: "https://blacklivesmatter.com",
    focusAreas: ["racial", "community"],
    engagementTypes: ["in-person", "online", "event planning", "outreach"],
    locations: ["International", "USA", "UK", "Canada"]
  },
  {
    id: "mijente",
    name: "Mijente",
    description: "A political, digital, and grassroots hub for Latinx and Chicanx organizing and movement building.",
    category: "Multi-Issue",
    website: "https://mijente.net",
    focusAreas: ["immigration", "racial", "community"],
    engagementTypes: ["in-person", "online", "outreach", "event planning"],
    locations: ["National"],
    logo: "data:image/png;base64,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"
  },
  {
    id: "ndwa",
    name: "National Domestic Workers Alliance (NDWA)",
    description: "Works to bring respect, recognition, and inclusion to domestic workers, including nannies, house cleaners, and caregivers.",
    category: "Labor Rights",
    website: "https://www.domesticworkers.org",
    focusAreas: ["workplace", "feminism", "economic"],
    engagementTypes: ["in-person", "online", "outreach", "event planning"],
    locations: ["National"]
  },
  {
    id: "byp100",
    name: "Black Youth Project 100 (BYP100)",
    description: "A member-based organization of Black youth activists creating justice and freedom for all Black people.",
    category: "Youth Organizing",
    website: "https://www.byp100.org",
    focusAreas: ["racial", "youth", "community"],
    engagementTypes: ["in-person", "online", "outreach", "event planning"],
    locations: ["National"]
  }
];