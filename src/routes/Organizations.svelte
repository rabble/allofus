<script lang="ts">
  import { onMount } from 'svelte';
  import { organizations } from '../lib/data/organizations';
  import OrganizationCard from '../lib/components/organizations/OrganizationCard.svelte';
  import SearchContainer from '../lib/components/search/SearchContainer.svelte';
  import { searchFilters } from '../lib/stores/searchStore';
  import { initializeFromUrl /*, syncUrlWithFilters */ } from '../lib/stores/urlStore';
  import { writable } from 'svelte/store';

  // Stores for selected focus areas and engagement types
  const selectedFocusAreas = writable<string[]>([]);
  const selectedEngagementTypes = writable<string[]>([]);

  // Initialize filters from URL when component mounts
  onMount(() => {
    initializeFromUrl();
  });

  $: filteredOrgs = organizations.filter(org => {
    const searchTerm = $searchFilters.location.toLowerCase();
    
    const locationMatch = !searchTerm || 
      org.locations.some(loc => loc.toLowerCase().includes(searchTerm));
      
    const nameMatch = !searchTerm || 
      org.name.toLowerCase().includes(searchTerm);
      
    const descriptionMatch = !searchTerm || 
      org.description.toLowerCase().includes(searchTerm);
      
    const focusAreaMatch = $selectedFocusAreas.length === 0 || 
      $selectedFocusAreas.some(area => org.focusAreas.includes(area));
      
    const engagementMatch = $selectedEngagementTypes.length === 0 || 
      $selectedEngagementTypes.some(type => org.engagementTypes.includes(type));
      
    return (locationMatch || nameMatch || descriptionMatch) && focusAreaMatch && engagementMatch;
  });
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-primary mb-6">Organizations</h1>
  
  <SearchContainer
    bind:selectedFocusAreas={$selectedFocusAreas}
    bind:selectedEngagementTypes={$selectedEngagementTypes}
  />
  
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