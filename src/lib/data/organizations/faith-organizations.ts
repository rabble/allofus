import type { Organization } from '../types';

export const faithOrganizations: Organization[] = [
  {
    id: "faithful-america",
    name: "Faithful America",
    description: "A community of progressive Christians organizing for social, economic, and racial justice.",
    category: "Faith-Based",
    website: "https://www.faithfulamerica.org",
    focusAreas: ["racial", "economic", "community"],
    engagementTypes: ["online", "messaging", "outreach"],
    locations: ["National"]
  },
  {
    id: "grassroots-global-justice",
    name: "Grassroots Global Justice Alliance (GGJ)",
    description: "A movement-building organization that connects grassroots groups to advance justice across economic, racial, and environmental issues.",
    category: "Multi-Issue",
    website: "https://ggjalliance.org",
    focusAreas: ["economic", "racial", "climate"],
    engagementTypes: ["in-person", "online", "outreach"],
    locations: ["National"]
  },
  {
    id: "poor-peoples-campaign",
    name: "The Poor People's Campaign",
    description: "Reviving Dr. Martin Luther King Jr.'s movement for racial and economic justice through mass mobilization and policy advocacy.",
    category: "Multi-Issue",
    website: "https://www.poorpeoplescampaign.org",
    focusAreas: ["racial", "economic", "community"],
    engagementTypes: ["in-person", "online", "event planning", "outreach"],
    locations: ["National"]
  },
  {
    id: "detention-watch",
    name: "Detention Watch Network",
    description: "A coalition dedicated to abolishing immigration detention through grassroots advocacy and public education.",
    category: "Immigration",
    website: "https://www.detentionwatchnetwork.org",
    focusAreas: ["immigration", "community"],
    engagementTypes: ["online", "messaging", "outreach"],
    locations: ["National"]
  },
  {
    id: "via-campesina",
    name: "La Via Campesina North America",
    description: "An international peasant movement advocating for food sovereignty and agricultural rights.",
    category: "Food Justice",
    website: "https://viacampesina.org",
    focusAreas: ["food", "community", "economic"],
    engagementTypes: ["in-person", "outreach", "administrative"],
    locations: ["International", "USA"]
  }
];