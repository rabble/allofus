export interface Announcement {
  id: string;
  organizationId: string;
  content: string;
  date: string;
  link?: string;
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