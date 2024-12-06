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

  // Stores for selected focus areas, engagement types, and locations
  const selectedFocusAreas = writable<string[]>([]);
  const selectedEngagementTypes = writable<EngagementType[]>([]);
  const selectedLocations = writable<{ value: string }[]>([]);

  // Initialize filters from URL when component mounts
  onMount(() => {
    initializeFromUrl();
  });

  let filteredOrgs: Organization[] = [];

  $: {
    const filters = $searchFilters || { location: '', focusArea: '', engagementType: '' };
    const focusAreas = $selectedFocusAreas || [];
    const engagementTypes = $selectedEngagementTypes || [];
    const locations = $selectedLocations ? $selectedLocations.map(loc => loc.value) : [];

    console.log('Selected Focus Areas:', focusAreas);
    console.log('Selected Engagement Types:', engagementTypes);
    console.log('Selected Locations:', locations);

    const isFilterEmpty = locations.length === 0 && focusAreas.length === 0 && engagementTypes.length === 0;

    filteredOrgs = isFilterEmpty ? organizations : organizations.filter(org => {
      const locationMatch = locations.length === 0 || 
        locations.some(selectedLoc => 
          org.locations.some(orgLoc => orgLoc.toLowerCase() === selectedLoc.toLowerCase())
        );

      console.log('Organization:', org.name);
      console.log('Location Match:', locationMatch);

      const focusAreaMatch = focusAreas.length === 0 || focusAreas.some(area => {
        const areaValue = area.value;
        const isString = typeof areaValue === 'string';
        console.log('Checking Focus Area:', areaValue, 'Is String:', isString);
        const match = isString && org.focusAreas.some(orgArea => {
          const orgAreaMatch = orgArea.toLowerCase() === areaValue.toLowerCase();
          console.log('Org Area:', orgArea, 'Matches:', orgAreaMatch);
          return orgAreaMatch;
        });
        console.log('Focus Area Match for', areaValue, ':', match);
        return match;
      });

      console.log('Focus Area Match:', focusAreaMatch);

      const engagementMatch = engagementTypes.length === 0 || engagementTypes.every(engagementType => {
        const isString = typeof engagementType.value === 'string';
        console.log('Checking Engagement Type:', engagementType.value, 'Is String:', isString);
        const match = isString && org.engagementTypes.some(orgType => {
          const orgTypeMatch = orgType.toLowerCase() === engagementType.value.toLowerCase();
          console.log('Org Type:', orgType, 'Matches:', orgTypeMatch);
          return orgTypeMatch;
        });
        console.log('Engagement Match for', engagementType.value, ':', match);
        return match;
      });

      console.log('Engagement Match:', engagementMatch);

      return locationMatch && focusAreaMatch && engagementMatch;
    });
  }
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-primary mb-2">Search Organizations</h1>
  <p class="text-lg text-gray-700 mb-6">
    Use the search to find and share resources and skills in your area or online. For your locale, your issue interests, and how you would like to help, choose one or more preferences for each drop down list to filter your search.
  </p>
  
  <SearchContainer
    selectedFocusAreas={selectedFocusAreas}
    selectedEngagementTypes={selectedEngagementTypes}
    selectedLocations={selectedLocations}
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
          selectedLocations.set([]);
        }}
      >
        Clear filters
      </button>
    </div>
  {/if}
</div>
