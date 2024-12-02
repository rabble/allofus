<script lang="ts">
  import type { SocialPost } from '../../types/content';
  import { Link } from 'svelte-routing';
  import { organizations } from '../../data/organizations';
  
  export let announcements: SocialPost[];
  
  function getOrgName(orgId: string): string {
    return organizations.find(org => org.id === orgId)?.name || 'Unknown Organization';
  }

  function getPlatformIcon(platform: 'twitter' | 'threads' | 'bluesky'): string {
    switch (platform) {
      case 'twitter': return '𝕏'; // Or use an actual icon
      case 'threads': return '⌁';
      case 'bluesky': return '☁️';
      default: return '';
    }
  }
</script>

<div class="space-y-4">
  {#each announcements as post}
    <div class="bg-white p-4 rounded-lg shadow">
      <div class="flex justify-between items-start mb-2">
        <Link 
          to={`/organizations/${post.organizationId}`}
          class="text-secondary hover:text-primary font-medium"
        >
          {getOrgName(post.organizationId)}
        </Link>
        <div class="flex items-center gap-2">
          <span class="text-gray-500">{getPlatformIcon(post.platform)}</span>
          <span class="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
        </div>
      </div>
      <p class="text-gray-700">{post.content}</p>
      <div class="mt-2 flex items-center justify-between">
        <span class="text-sm text-gray-500">{post.authorHandle}</span>
        <a 
          href={post.originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="text-secondary hover:text-primary text-sm inline-block"
        >
          View original post →
        </a>
      </div>
    </div>
  {/each}
</div> 