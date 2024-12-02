import type { SocialPost } from '../types/content';

export const socialPosts: SocialPost[] = [
  {
    id: 'aclu-1',
    organizationId: 'aclu',
    platform: 'twitter',
    content: "BREAKING: We just filed a lawsuit challenging Alabama's ban on gender-affirming care. This law threatens doctors with up to 10 years in prison for providing evidence-based medical care to transgender youth.",
    date: '2024-03-15',
    originalUrl: 'https://twitter.com/ACLU/status/1234567890',
    authorHandle: '@ACLU'
  },
  {
    id: 'blm-1',
    organizationId: 'blm-at-school',
    platform: 'threads',
    content: "Join us for our annual conference on racial justice in education. Register now!",
    date: '2024-03-10',
    originalUrl: 'https://threads.net/BLM/status/0987654321',
    authorHandle: '@BLM'
  },
  // Add more posts for each organization...
]; 