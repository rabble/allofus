export interface SocialPost {
  id: string;
  organizationId: string;
  platform: 'twitter' | 'threads' | 'bluesky';
  content: string;
  date: string;
  originalUrl: string;
  authorHandle: string;
}

export interface Announcement extends SocialPost {
  type: 'announcement';
}

export interface Report {
  id: string;
  organizationId: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  image?: string;
  link?: string;
} 