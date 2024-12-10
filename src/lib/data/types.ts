export interface FocusAreaContent {
  id: string;
  title: string;
  description: string;
  context: string;
}

export interface Organization {
  id: string;
  name: string;
  description: string;
  category: string;
  website?: string;
  focusAreas: string[];
  engagementTypes: string[];
  locations: string[];
  contact?: {
    email?: string;
    phone?: string;
    signal?: string;
  };
  socialMedia?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    bluesky?: string;
    threads?: string;
    mastodon?: string;
    nostr?: string;
  };
  logo?: string;
  joinNowLink?: string;
  membersCount?: number;
  staff?: {
    range: [number, number]; // Number range for staff
    description: string;     // Text description for staff
  };
  supporter?: {
    range: [number, number]; // Number range for supporters
    description: string;     // Text description for supporters
  };
}