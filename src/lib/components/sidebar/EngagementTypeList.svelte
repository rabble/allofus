<script lang="ts">
  import { Link } from "svelte-routing";
  import { engagementTypes } from "../../data/options";
  import { organizations } from "../../data/organizations";
  
  export let currentEngagementType: string | null = null;

  // Count organizations per engagement type
  const engagementCounts = engagementTypes.reduce((acc, type) => {
    acc[type.toLowerCase()] = organizations.filter(org => 
      org.engagementTypes.map(t => t.toLowerCase()).includes(type.toLowerCase())
    ).length;
    return acc;
  }, {} as Record<string, number>);

  // Filter out types with no organizations
  const activeTypes = engagementTypes.filter(type => 
    engagementCounts[type.toLowerCase()] > 0
  );
</script>

<div class="p-4">
  <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Engagement Types</h3>
  <ul class="space-y-1">
    {#each activeTypes as type}
      <li>
        <Link
          to={`/engagement-types/${type.toLowerCase()}`}
          class="flex items-center justify-between px-2 py-1.5 text-sm rounded-md {currentEngagementType === type.toLowerCase() ? 'bg-green-100 text-green-800' : 'text-gray-700 hover:bg-gray-100'}"
        >
          <span>{type}</span>
          <span class="text-xs text-gray-500">{engagementCounts[type.toLowerCase()]}</span>
        </Link>
      </li>
    {/each}
  </ul>
</div>