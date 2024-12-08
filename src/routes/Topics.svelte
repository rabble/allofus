<script lang="ts">
  import { Link } from "svelte-routing";
  import { organizations } from "../lib/data/organizations";
  import { focusAreaContents } from "../lib/data/focusAreaContent";

  // Count organizations per focus area and filter out areas with no organizations
  const activeFocusAreas = focusAreaContents
    .filter(area => {
      const count = organizations.filter(org => 
        org.focusAreas.includes(area.id)
      ).length;
      return count > 0;
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  // Get counts for active areas
  const focusAreaCounts = activeFocusAreas.reduce((acc, area) => {
    acc[area.id] = organizations.filter(org => 
      org.focusAreas.includes(area.id)
    ).length;
    return acc;
  }, {} as Record<string, number>);
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold text-primary mb-6">Movement Topics</h1>
  
  <div class="bg-white shadow-lg rounded-lg p-8 mb-12">
    <h2 class="text-2xl font-bold text-primary mb-4">About All of Us Directory</h2>
    <p class="text-lg text-gray-700 mb-6">
      Welcome to the All of Us Directory, a comprehensive resource connecting individuals with organizations working across various social justice movements.
    </p>
    <p class="text-lg text-gray-700">
      Browse the topics below to learn more about each movement area and find organizations working on issues you care about. Whether you're looking to get involved locally or connect with national campaigns, you'll find opportunities to contribute your skills and energy to building a better world.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each activeFocusAreas as area}
      <Link 
        to={`/focus-areas/${area.id}`}
        class="relative block bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
      >

      <div>
        <div  class="flex justify-between items-center">
        <h3 class="text-xl font-semibold text-primary mb-1">{area.title}</h3>
        <br>
        <p class="text-gray-600">
        {focusAreaCounts[area.id]} {focusAreaCounts[area.id] === 1 ? 'organization' : 'organizations'}
        </p>
        </div>
        <img
        src={area.iconUrl}
        alt="{area.title} Icon"
        class="ml-4 h-full"
        />
        </div>

        <hr class="my-4 border-gray-300" />

        <p class="text-gray-700 mb-4">{area.description}</p>
        <span class="text-secondary hover:text-primary transition-colors">
          Learn more →
        </span>
      </Link>
    {/each}
  </div>
</div>