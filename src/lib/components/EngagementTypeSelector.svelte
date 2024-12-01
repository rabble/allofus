<script lang="ts">
  import { engagementTypes } from '../data/options';
  import type { EngagementType } from '../data/options';

  let selectedEngagementType: EngagementType;
</script>

<label for="engagement-type" class="block text-sm font-medium text-gray-700">Engagement Type</label>
<select id="engagement-type" bind:value={selectedEngagementType} class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
  {#each engagementTypes as type}
    <option value={type}>{type}</option>
  {/each}
</select> 