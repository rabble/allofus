<script lang="ts">
  import Select from 'svelte-select';
  import { focusAreas, engagementTypes } from '../../data/options';
  import type { Writable } from 'svelte/store';

  export let selectedFocusAreas: Writable<string[]>;
  export let selectedEngagementTypes: Writable<string[]>;
</script>

<div class="mb-4">
  <h3 class="text-lg font-semibold mb-2">Select Focus Areas</h3>
  <Select
    items={focusAreas}
    bind:value={$selectedFocusAreas}
    multiple={true}
    label="label"
    placeholder="Select focus areas"
  />
</div>

<div class="mb-4">
  <h3 class="text-lg font-semibold mb-2">Select Engagement Types</h3>
  <Select
    items={engagementTypes}
    bind:value={$selectedEngagementTypes}
    multiple={true}
    label="label"
    placeholder="Select engagement types"
  />
</div>