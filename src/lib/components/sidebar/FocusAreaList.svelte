<script lang="ts">
  import { Link } from "svelte-routing";
  import { organizations } from "../../data/organizations";
  import { focusAreaContents } from "../../data/focusAreaContent";
  
  export let currentFocusArea: string | null = null;

  console.log("=== DEBUG START ===");
  console.log("All Focus Area Contents:", focusAreaContents);
  console.log("All Organizations:", organizations);
  console.log("Current Focus Area:", currentFocusArea);

  // Count organizations per focus area
  const focusAreaCounts = focusAreaContents.reduce((acc, area) => {
    const count = organizations.filter(org => 
      org.focusAreas.includes(area.id)
    ).length;
    console.log(`Count for ${area.id}:`, count);
    acc[area.id] = count;
    return acc;
  }, {} as Record<string, number>);

  console.log("Focus Area Counts:", focusAreaCounts);

  // Filter out areas with no organizations
  const activeAreas = focusAreaContents
    .filter(area => {
      const hasOrgs = focusAreaCounts[area.id] > 0;
      console.log(`${area.id} has organizations:`, hasOrgs);
      return hasOrgs;
    })
    .map(area => ({
      value: area.id,
      label: area.title,
      title: area.title
    }))
    .sort((a, b) => a.title.localeCompare(b.title));

  console.log("Final Active Areas:", activeAreas);
  console.log("=== DEBUG END ===");
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