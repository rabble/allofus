<script lang="ts">
  import { searchFilters } from '../../stores/searchStore';
  import { focusAreas, engagementTypes } from '../../data/options';

  let locationInput: HTMLInputElement;

  // Handle input changes - No URL update needed here
  function handleLocationInputChange() {
    // Directly update the store without any side effects
    searchFilters.update(filters => ({ ...filters, location: locationInput.value }));
  }

  // Watch for changes in search filters (no refocusing needed)
  $: {
    // No refocusing logic needed
  }
</script>

<div class="bg-white shadow-lg rounded-lg p-6">
  <div class="grid md:grid-cols-3 gap-6">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2" for="location">
        Location
      </label>
      <input
        bind:this={locationInput}
        type="text"
        id="location"
        bind:value={$searchFilters.location}
        on:input={handleLocationInputChange}
        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-accent"
        placeholder="Enter city or state"
      />
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2" for="focus-area">
        Focus Area
      </label>
      <select
        id="focus-area"
        bind:value={$searchFilters.focusArea}
        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-accent"
      >
        <option value="">Select focus area</option>
        {#each focusAreas as area}
          <option value={area.value}>{area.label}</option>
        {/each}
      </select>
    </div>
    
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2" for="engagement">
        How do you want to engage?
      </label>
      <select
        id="engagement"
        bind:value={$searchFilters.engagementType}
        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-accent"
      >
        <option value="">Select engagement type</option>
        {#each engagementTypes as type}
          <option value={type.toLowerCase()}>{type}</option>
        {/each}
      </select>
    </div>
  </div>
</div>