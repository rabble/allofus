<script lang="ts">
  import { engagementTypes } from '../data/options';
  import type { EngagementType } from '../data/options';

  let selectedEngagementType: EngagementType;
</script>

<select id="engagement-type" bind:value={selectedEngagementType}>
  {#each engagementTypes as type}
    <option value={type}>{type}</option>
  {/each}
</select> 