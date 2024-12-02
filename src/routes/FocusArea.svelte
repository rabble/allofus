<script lang="ts">
  import { focusAreaContents } from "../lib/data/focusAreaContent";
  import { organizations } from "../lib/data/organizations";
  import OrganizationCard from "../lib/components/organizations/OrganizationCard.svelte";
  import Sidebar from "../lib/components/sidebar/Sidebar.svelte";
  import LoadingSpinner from "../lib/components/shared/LoadingSpinner.svelte";
  import ErrorBoundary from "../lib/components/shared/ErrorBoundary.svelte";
  import { setCurrentFocusArea } from "../lib/stores/filterStore";
  
  export let id: string;
  
  $: {
    setCurrentFocusArea(id);
  }
  
  $: focusArea = focusAreaContents
    .find(area => area.id === id);
  $: relatedOrganizations = organizations
    .filter(org => org.focusAreas.includes(id))
    .sort((a, b) => a.name.localeCompare(b.name));
</script>

<div class="container mx-auto px-4 py-8">
  <div class="flex gap-8">
    <ErrorBoundary>
      <Sidebar currentFocusArea={id} />
    </ErrorBoundary>
    
    <div class="flex-1">
      <ErrorBoundary>
        {#if focusArea}
          <h1 class="text-3xl font-bold text-primary mb-6">{focusArea.title}</h1>
          
          <div class="bg-white shadow-lg rounded-lg p-8 mb-8 flex">
            <div class="flex-1">
              <h2 class="text-2xl font-semibold mb-4">About this Movement</h2>
              <p class="text-gray-700 mb-6">{focusArea.description}</p>
              
              <h2 class="text-2xl font-semibold mb-4">Movement Context</h2>
              <p class="text-gray-700">{focusArea.context}</p>
              </div>
              <div class="flex-none ml-4">
              <img
              src={focusArea.iconUrl}
              alt="{focusArea.title} Icon"
              class="ml-4 max-w-xs" 
              />
              </div>
          </div>


          <h2 class="text-2xl font-semibold mb-6">Organizations Working on {focusArea.title}</h2>
          {#if relatedOrganizations.length > 0}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              {#each relatedOrganizations as org (org.id)}
                <OrganizationCard {org} />
              {/each}
            </div>
          {:else}
            <p class="text-gray-600">No organizations found for this focus area.</p>
          {/if}
        {:else}
          <LoadingSpinner />
        {/if}
      </ErrorBoundary>
    </div>
  </div>
</div>