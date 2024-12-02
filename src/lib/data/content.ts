import type { Announcement, Report } from '../types/content';

export const announcements: Announcement[] = [
  {
    id: '1',
    organizationId: 'org1',
    content: 'Join us for our upcoming rally this Saturday!',
    date: '2024-03-15',
    link: 'https://example.com/rally'
  },
  // Add more sample announcements...
];

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