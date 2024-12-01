<script lang="ts">
  import type { Organization } from '../../data/types';
  import { Link } from 'svelte-routing';
  import { focusAreas } from '../../data/options';
  
  export let org: Organization;

  function getFocusAreaLabel(value: string): string {
    const area = focusAreas.find(a => a.value === value);
    return area ? area.label : value;
  }
</script>

<Link to={`/organizations/${org.id}`} class="block">
  <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
    <div class="flex items-start justify-between mb-4">
      <div>
        <h2 class="text-xl font-bold text-primary mb-2">{org.name}</h2>
        <span class="inline-block bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded">
          {org.category}
        </span>
      </div>
      {#if org.logo}
        <img src={org.logo} alt={`${org.name} logo`} class="h-12 w-12 object-contain" />
      {/if}
    </div>

    <p class="text-gray-600 mb-4">{org.description}</p>
    
    {#if org.focusAreas.length > 0}
      <div class="mb-4">
        <h3 class="text-sm font-semibold text-gray-700 mb-2">Focus Areas:</h3>
        <div class="flex flex-wrap gap-2">
          {#each org.focusAreas as area}
            <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {getFocusAreaLabel(area)}
            </span>
          {/each}
        </div>
      </div>
    {/if}

    {#if org.locations.length > 0}
      <div class="mb-4">
        <h3 class="text-sm font-semibold text-gray-700 mb-2">Locations:</h3>
        <div class="flex flex-wrap gap-2">
          {#each org.locations as location}
            <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              {location}
            </span>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</Link>