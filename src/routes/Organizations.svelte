<script lang="ts">
  import { onMount } from 'svelte';
  import { organizations } from '../lib/data/organizations';
  import OrganizationCard from '../lib/components/organizations/OrganizationCard.svelte';
  import SearchContainer from '../lib/components/search/SearchContainer.svelte';
  import { searchFilters } from '../lib/stores/searchStore';
  import { initializeFromUrl, syncUrlWithFilters } from '../lib/stores/urlStore';

  // Initialize filters from URL when component mounts
  onMount(() => {
    initializeFromUrl();
  });

  // Keep URL in sync with filters
  $: $syncUrlWithFilters;

  $: filteredOrgs = organizations.filter(org => {
    const locationMatch = !$searchFilters.location || 
      org.locations.some(loc => 
        loc.toLowerCase().includes($searchFilters.location.toLowerCase())
      );
      
    const focusAreaMatch = !$searchFilters.focusArea || 
      org.focusAreas.includes($searchFilters.focusArea);
      
    const engagementMatch = !$searchFilters.engagementType || 
      org.engagementTypes.includes($searchFilters.engagementType);
      
    return locationMatch && focusAreaMatch && engagementMatch;
  });
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-primary mb-6">Organizations</h1>
  
  <SearchContainer />
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
    {#each filteredOrgs as org (org.id)}
      <OrganizationCard {org} />
    {/each}
  </div>
  
  {#if filteredOrgs.length === 0}
    <div class="text-center py-12">
      <p class="text-xl text-gray-600">No organizations found matching your criteria.</p>
      <button
        class="mt-4 text-secondary hover:text-primary"
        on:click={() => {
          searchFilters.set({ location: '', focusArea: '', engagementType: '' });
        }}
      >
        Clear filters
      </button>
    </div>
  {/if}
</div>