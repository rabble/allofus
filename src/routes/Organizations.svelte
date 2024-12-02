<script lang="ts">
  import { onMount } from 'svelte';
  import { organizations } from '../lib/data/organizations';
  import OrganizationCard from '../lib/components/organizations/OrganizationCard.svelte';
  import SearchContainer from '../lib/components/search/SearchContainer.svelte';
  import { searchFilters } from '../lib/stores/searchStore';
  import { initializeFromUrl } from '../lib/stores/urlStore';
  import { writable } from 'svelte/store';
  import type { Organization } from '../lib/data/types';

  interface EngagementType {
    value: string;
  }

  // Stores for selected focus areas, engagement types, and location
  const selectedFocusAreas = writable<string[]>([]);
  const selectedEngagementTypes = writable<EngagementType[]>([]);
  const location = writable<string>('');

  // Initialize filters from URL when component mounts
  onMount(() => {
    initializeFromUrl();
  });

  let filteredOrgs: Organization[] = [];

  $: {
    const filters = $searchFilters || { location: '', focusArea: '', engagementType: '' };
    const focusAreas = $selectedFocusAreas || [];
    const engagementTypes = $selectedEngagementTypes || [];
    const searchLocation = $location || '';

    const isFilterEmpty = !filters.location && focusAreas.length === 0 && engagementTypes.length === 0 && !searchLocation;

    filteredOrgs = isFilterEmpty ? organizations : organizations.filter(org => {
      const searchTerm = (filters.location || searchLocation).toLowerCase();
      const locationMatch = !searchTerm || 
        org.locations.some(loc => loc.toLowerCase().includes(searchTerm));
      const nameMatch = !searchTerm || 
        org.name.toLowerCase().includes(searchTerm);
      const descriptionMatch = !searchTerm || 
        org.description.toLowerCase().includes(searchTerm);

      const focusAreaMatch = focusAreas.every(area => {
        return org.focusAreas.some(orgArea => 
          orgArea.toLowerCase() === area.value.toLowerCase()
        );
      });

      const engagementMatch = engagementTypes.every(engagementType => 
        org.engagementTypes.some(orgType => 
          orgType.toLowerCase() === engagementType.value.toLowerCase()
        )
      );

      return (locationMatch || nameMatch || descriptionMatch) && focusAreaMatch && engagementMatch;
    });
  }
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-primary mb-6">Organizations</h1>
  
  <SearchContainer
    selectedFocusAreas={selectedFocusAreas}
    selectedEngagementTypes={selectedEngagementTypes}
    location={location}
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
