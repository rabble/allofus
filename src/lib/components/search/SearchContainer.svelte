<script lang="ts">
  import Select from 'svelte-select';
  import { focusAreas, engagementTypes } from '../../data/options';
  import type { Writable } from 'svelte/store';

  export let selectedFocusAreas: Writable<string[]>;
  export let selectedEngagementTypes: Writable<string[]>;
  export let selectedLocations: Writable<string[]>;

  // Extract unique locations from organizations data
  import { organizations } from '../../data/organizations';
  const availableLocations = Array.from(new Set(organizations.flatMap(org => org.locations)));
</script>

<div class="flex space-x-4 mb-4">
  <div class="flex-1">
    <h3 class="text-lg font-semibold mb-2">Select Locations</h3>
    <Select
      items={availableLocations}
      bind:value={$selectedLocations}
      multiple={true}
      placeholder="Select locations"
    />
  </div>

  <div class="flex-1">
    <h3 class="text-lg font-semibold mb-2">Select Focus Areas</h3>
    <Select
      items={focusAreas}
      bind:value={$selectedFocusAreas}
      multiple={true}
      placeholder="Select focus areas"
      itemText="label"
    />
  </div>

  <div class="flex-1">
    <h3 class="text-lg font-semibold mb-2">Select Engagement Types</h3>
    <Select
      items={engagementTypes}
      bind:value={$selectedEngagementTypes}
      multiple={true}
      placeholder="Select engagement types"
      itemText="label"
    />
  </div>
</div>