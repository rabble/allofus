<script lang="ts">
  import type { Announcement } from '../../types/content';
  import { Link } from 'svelte-routing';
  import { organizations } from '../../data/organizations';
  
  export let announcements: Announcement[];
  
  function getOrgName(orgId: string): string {
    return organizations.find(org => org.id === orgId)?.name || 'Unknown Organization';
  }
</script>

<div class="space-y-4">
  {#each announcements as announcement}
    <div class="bg-white p-4 rounded-lg shadow">
      <div class="flex justify-between items-start mb-2">
        <Link 
          to={`/organizations/${announcement.organizationId}`}
          class="text-secondary hover:text-primary font-medium"
        >
          {getOrgName(announcement.organizationId)}
        </Link>
        <span class="text-sm text-gray-500">{new Date(announcement.date).toLocaleDateString()}</span>
      </div>
      <p class="text-gray-700">{announcement.content}</p>
      {#if announcement.link}
        <a 
          href={announcement.link}
          target="_blank"
          rel="noopener noreferrer"
          class="text-secondary hover:text-primary text-sm mt-2 inline-block"
        >
          Learn more →
        </a>
      {/if}
    </div>
  {/each}
</div> 