import type { SocialPost, Report } from '../types/content';
import { socialPosts } from './socialContent';

// Export social posts as announcements for backward compatibility
export const announcements: SocialPost[] = socialPosts;

export const reports: Report[] = [
  {
    id: '1',
    organizationId: 'org1',
    title: 'Annual Impact Report 2024',
    summary: 'A comprehensive look at our achievements and challenges this year.',
    content: 'Full report content here...',
    date: '2024-03-10',
    image: 'https://example.com/report-cover.jpg',
    link: 'https://example.com/report'
  },
  // Add more sample reports...
]; 