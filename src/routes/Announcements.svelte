<script lang="ts">
  import { announcements } from '../lib/data/content';
  import AnnouncementFeed from '../lib/components/content/AnnouncementFeed.svelte';
  import { Link } from 'svelte-routing';
  
  $: sortedPosts = [...announcements]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
</script>

<div class="container mx-auto px-4 py-8 max-w-4xl">
  <div class="flex items-center justify-between mb-8">
    <h1 class="text-3xl font-bold text-primary">Social Media Updates</h1>
    <Link to="/" class="text-secondary hover:text-primary">
      ← Back to Home
    </Link>
  </div>

  <div class="bg-white shadow-lg rounded-lg p-8">
    <p class="text-gray-600 mb-8">
      Stay up to date with the latest social media posts, announcements, and updates from organizations in our network.
    </p>

    {#if sortedPosts.length > 0}
      <AnnouncementFeed announcements={sortedPosts} />
    {:else}
      <p class="text-center text-gray-600 py-12">
        No social media updates available at this time.
      </p>
    {/if}
  </div>
</div> 