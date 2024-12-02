<script lang="ts">
  import Select from 'svelte-select';
  import { focusAreas, engagementTypes } from '../../data/options';
  import type { Writable } from 'svelte/store';

  export let selectedFocusAreas: Writable<string[]>;
  export let selectedEngagementTypes: Writable<string[]>;
  export let location: Writable<string>;
</script>

<div class="flex space-x-4 mb-4">
  <div class="flex-1">
    <h3 class="text-lg font-semibold mb-2">Search</h3>
    <input
      type="text"
      bind:value={$location}
      class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-accent"
      placeholder="Search by location or keywords"
    />
  </div>

  <div class="flex-1">
    <h3 class="text-lg font-semibold mb-2">Select Focus Areas</h3>
    <Select
      items={focusAreas}
      bind:value={$selectedFocusAreas}
      multiple={true}
      label="label"
      placeholder="Select focus areas"
    />
  </div>

  <div class="flex-1">
    <h3 class="text-lg font-semibold mb-2">Select Engagement Types</h3>
    <Select
      items={engagementTypes}
      bind:value={$selectedEngagementTypes}
      multiple={true}
      label="label"
      placeholder="Select engagement types"
    />
  </div>
</div>