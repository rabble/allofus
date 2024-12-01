<script lang="ts">
  import { searchFilters } from '../../stores/searchStore';
  import SearchField from './SearchField.svelte';
  import { engagementTypes, focusAreas } from '../../data/options';
  import { focusAreaContents } from '../../data/focusAreaContent';
  import { navigate, Link } from 'svelte-routing';

  const sortedFocusAreas = focusAreas.sort((a, b) => {
    const areaA = focusAreaContents.find(f => f.id === a.value);
    const areaB = focusAreaContents.find(f => f.id === b.value);
    if (areaA && areaB) {
      return areaA.title.localeCompare(areaB.title);
    } else if (areaA) {
      return -1;
    } else if (areaB) {
      return 1;
    } else {
      return 0;
    }
  });

  function handleSubmit() {
    const queryParams = new URLSearchParams();
    if ($searchFilters.location) queryParams.set('location', $searchFilters.location);
    if ($searchFilters.focusArea) queryParams.set('focusArea', $searchFilters.focusArea);
    if ($searchFilters.engagementType) queryParams.set('engagementType', $searchFilters.engagementType);
    
    navigate(`/organizations?${queryParams.toString()}`);
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="grid md:grid-cols-3 gap-6">
  <SearchField
    label="Location"
    id="location"
    bind:value={$searchFilters.location}
    placeholder="Enter city or state"
  />
  
  <SearchField
    label="Focus Area"
    id="focus-area"
    bind:value={$searchFilters.focusArea}
    type="select"
  >
    <option value="">Select focus area</option>
    {#each sortedFocusAreas as area}
      <option value={area.value}>{area.label}</option>
    {/each}
  </SearchField>
  
  <SearchField
    label="How do you want to engage?"
    id="engagement"
    bind:value={$searchFilters.engagementType}
    type="select"
  >
    <option value="">Select engagement type</option>
    {#each engagementTypes as type}
      <option value={type.toLowerCase()}>{type}</option>
    {/each}
  </SearchField>
  
  <div class="md:col-span-3">
    <button 
      type="submit"
      class="w-full md:w-auto bg-secondary hover:bg-primary text-white px-6 py-2 rounded-md transition-colors"
    >
      Search Organizations
    </button>
  </div>
</form>

<nav>
  <ul>
    <li><Link to="/topics">Topics</Link></li>
    <li><Link to="/get-involved">Get Involved</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>
</nav>