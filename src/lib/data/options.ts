import { focusAreaContents } from './focusAreaContent';

export const focusAreas = focusAreaContents.map(area => ({
  value: area.id,
  label: area.title
}));

// Define a type for engagement types
export type EngagementType = 
  | "In-person"
  | "Online"
  | "Hybrid"
  | "Construction"
  | "Cooking"
  | "Driving/transporting"
  | "Editing"
  | "Event/protest planning & logistics"
  | "Fundraising"
  | "Legal"
  | "Medical"
  | "Messaging (arts/media/graphics)"
  | "Outreach"
  | "Participate in trainings"
  | "Research"
  | "Strike Support"
  | "Sanctuary support"
  | "Tech support (programming, etc.)";

// Use the type for the engagementTypes array
export const engagementTypes: EngagementType[] = [
  "In-person",
  "Online",
  "Hybrid",
  "Construction",
  "Cooking",
  "Driving/transporting",
  "Editing",
  "Event/protest planning & logistics",
  "Fundraising",
  "Legal",
  "Medical",
  "Messaging (arts/media/graphics)",
  "Outreach",
  "Participate in trainings",
  "Research",
  "Strike Support",
  "Sanctuary support",
  "Tech support (programming, etc.)"
];