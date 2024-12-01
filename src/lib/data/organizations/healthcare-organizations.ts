import type { Organization } from '../types';

export const healthcareOrganizations: Organization[] = [
  {
    id: "pnhp",
    name: "Physicians for a National Health Program (PNHP)",
    description: "A non-profit research and education organization of physicians advocating for single-payer national health insurance.",
    category: "Healthcare",
    website: "https://pnhp.org",
    focusAreas: ["healthcare", "economic", "racial", "direct-democracy"],
    engagementTypes: ["online", "advocacy", "education", "outreach", "messaging"],
    locations: ["National"]
  },
  {
    id: "healthcare-now",
    name: "Healthcare-NOW",
    description: "A grassroots coalition fighting for a national single-payer healthcare system through advocacy and education.",
    category: "Healthcare",
    website: "https://healthcare-now.org",
    focusAreas: ["healthcare", "economic", "direct-democracy", "racial"],
    engagementTypes: ["online", "outreach", "education", "fundraising"],
    locations: ["National"]
  },
  {
    id: "center-health-progress",
    name: "Center for Health Progress",
    description: "Works to ensure that everyone can access affordable and high-quality health care, focusing on systemic change.",
    category: "Healthcare",
    website: "https://centerforhealthprogress.org",
    focusAreas: ["healthcare", "economic", "racial", "immigration", "direct-democracy"],
    engagementTypes: ["in-person", "advocacy", "outreach", "education"],
    locations: ["Colorado"]
  },
  {
    id: "debt-collective",
    name: "Debt Collective",
    description: "A union for debtors fighting for the cancellation of unjust debts, including medical debt.",
    category: "Economic Justice",
    website: "https://debtcollective.org",
    focusAreas: ["healthcare", "economic", "direct-democracy", "racial"],
    engagementTypes: ["online", "direct action", "education", "mutual aid"],
    locations: ["National"]
  },
  {
    id: "community-catalyst",
    name: "Community Catalyst",
    description: "Advocates for a healthcare system that is accessible to all, working on policy initiatives and community engagement.",
    category: "Healthcare",
    website: "https://communitycatalyst.org",
    focusAreas: ["healthcare", "economic", "direct-democracy", "racial"],
    engagementTypes: ["advocacy", "education", "outreach", "messaging"],
    locations: ["National"]
  },
  {
    id: "national-nurses-united",
    name: "National Nurses United (NNU)",
    description: "The largest union of registered nurses in the U.S., advocating for direct-care nurses and patients, promoting Medicare for All.",
    category: "Healthcare",
    website: "https://nationalnursesunited.org",
    focusAreas: ["healthcare", "economic", "workplace", "direct-democracy", "reproductive"],
    engagementTypes: ["in-person", "advocacy", "education", "outreach"],
    locations: ["National"]
  },
  {
    id: "hcfa",
    name: "Health Care for All (HCFA)",
    description: "A consumer advocacy organization working to create a healthcare system that provides comprehensive, affordable, and equitable care.",
    category: "Healthcare",
    website: "https://hcfama.org",
    focusAreas: ["healthcare", "economic", "direct-democracy", "racial"],
    engagementTypes: ["advocacy", "outreach", "education", "messaging"],
    locations: ["Massachusetts"]
  },
  {
    id: "right-to-health",
    name: "Right to Health Action",
    description: "A grassroots movement fighting for health equity and a just response to pandemics and health crises.",
    category: "Healthcare",
    website: "https://righttohealthaction.org",
    focusAreas: ["healthcare", "economic", "racial", "direct-democracy"],
    engagementTypes: ["online", "advocacy", "education", "outreach"],
    locations: ["National"]
  },
  {
    id: "remote-area-medical",
    name: "Remote Area Medical (RAM)",
    description: "Provides free pop-up clinics delivering free dental, vision, and medical services to underserved communities.",
    category: "Healthcare",
    website: "https://ramusa.org",
    focusAreas: ["healthcare", "community", "economic"],
    engagementTypes: ["in-person", "direct service", "outreach", "volunteering"],
    locations: ["National"]
  },
  {
    id: "caring-denver",
    name: "Caring for Denver Foundation",
    description: "Funds community-based mental health and substance misuse programs to address unmet needs.",
    category: "Healthcare",
    website: "https://caring4denver.org",
    focusAreas: ["healthcare", "community", "economic"],
    engagementTypes: ["fundraising", "outreach", "education"],
    locations: ["Denver, Colorado"]
  }
];