<script lang="ts">
  import { Link } from "svelte-routing";
  import { focusAreas } from "../../data/options";
  import { organizations } from "../../data/organizations";
  
  export let currentFocusArea: string | null = null;

  // Count organizations per focus area
  const focusAreaCounts = focusAreas.reduce((acc, area) => {
    acc[area.value] = organizations.filter(org => 
      org.focusAreas.includes(area.value)
    ).length;
    return acc;
  }, {} as Record<string, number>);

  // Filter out areas with no organizations
  const activeAreas = focusAreas.filter(area => focusAreaCounts[area.value] > 0);
</script>

<div class="p-4">
  <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Focus Areas</h3>
  <ul class="space-y-1">
    {#each activeAreas as area}
      <li>
        <Link
          to={`/focus-areas/${area.value}`}
          class="flex items-center justify-between px-2 py-1.5 text-sm rounded-md {currentFocusArea === area.value ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-100'}"
        >
          <span>{area.label}</span>
          <span class="text-xs text-gray-500">{focusAreaCounts[area.value]}</span>
        </Link>
      </li>
    {/each}
  </ul>
</div>