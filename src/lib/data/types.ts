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
  };
  logo?: string;
}