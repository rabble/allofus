import type { Report } from '../types/content';

export const reports: Report[] = [
  {
    id: 'report-1',
    organizationId: 'aclu',
    title: 'Monthly Newsletter - March 2024',
    summary: 'Highlights of our activities and achievements in March.',
    content: 'Full newsletter content here...',
    date: '2024-03-31',
    link: 'https://example.com/newsletter-march-2024'
  },
  {
    id: 'report-2',
    organizationId: 'blm-at-school',
    title: 'Blog: The Impact of Community Engagement',
    summary: 'Exploring how community engagement drives positive change.',
    content: 'Full blog content here...',
    date: '2024-03-20',
    link: 'https://example.com/blog-community-engagement'
  },
  // Add more reports for each organization...
]; 