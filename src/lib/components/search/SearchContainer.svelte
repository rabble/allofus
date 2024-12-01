<script lang="ts">
  import Select from 'svelte-select';
  import { focusAreas, engagementTypes } from '../../data/options';
  import type { Writable } from 'svelte/store';

  export let selectedFocusAreas: string[] = [];
  export let selectedEngagementTypes: string[] = [];
</script>

<div class="mb-4">
  <h3 class="text-lg font-semibold mb-2">Select Focus Areas</h3>
  <Select
    items={focusAreas}
    value={selectedFocusAreas}
    on:change={e => selectedFocusAreas = e.detail}
    multiple={true}
    label="label"
    placeholder="Select focus areas"
  />
</div>

<div class="mb-4">
  <h3 class="text-lg font-semibold mb-2">Select Engagement Types</h3>
  <Select
    items={engagementTypes}
    value={selectedEngagementTypes}
    on:change={e => selectedEngagementTypes = e.detail}
    multiple={true}
    label="label"
    placeholder="Select engagement types"
  />
</div>