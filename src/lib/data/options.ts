import { focusAreaContents } from './focusAreaContent';

export const focusAreas = focusAreaContents.map(area => ({
  value: area.id,
  label: area.title
}));

export const engagementTypes = [
  "In-person",
  "Online",
  "Hybrid",
  "Administrative",
  "Advocacy",
  "Arts/Media",
  "Community",
  "Construction",
  "Cooking",
  "Education",
  "Event Planning",
  "Fundraising",
  "Legal",
  "Medical",
  "Messaging",
  "Outreach",
  "Policy",
  "Research",
  "Tech Support",
  "Training",
  "Transportation"
];