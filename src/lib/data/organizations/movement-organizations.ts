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
    locations: ["National"]
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