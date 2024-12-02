<script lang="ts">
  import { organizations } from '../lib/data/organizations';
  import { focusAreas } from '../lib/data/options';
  import { Link, navigate } from 'svelte-routing';
  import OrganizationCard from '../lib/components/organizations/OrganizationCard.svelte';
  
  export let id: string;
  
  $: organization = organizations.find(org => org.id === id);
  $: relatedOrganizations = organization ? findRelatedOrganizations(id) : [];
  
  function getFocusAreaLabel(value: string): string {
    const area = focusAreas.find(a => a.value === value);
    return area ? area.label : value;
  }

  function handleFocusAreaClick(area: string) {
    navigate(`/focus-areas/${area}`);
  }

  function handleEngagementTypeClick(type: string) {
    navigate(`/engagement-types/${type.toLowerCase()}`);
  }

  function findRelatedOrganizations(currentOrgId: string) {
    return organizations
      .filter(org => org.id !== currentOrgId)
      .map(org => {
        const commonEngagementTypes = org.engagementTypes.filter(type => organization.engagementTypes.includes(type)).length;
        return { ...org, similarityScore: commonEngagementTypes };
      })
      .sort((a, b) => b.similarityScore - a.similarityScore);
  }
</script>

{#if organization}
  <div class="container mx-auto px-4 py-8">
    <Link to={`/organizations/${id}`} class="text-secondary hover:text-primary mb-6 inline-block">
      ← Back to {organization.name}
    </Link>
    
    <h1 class="text-3xl font-bold text-primary mb-6">
      Organizations Related to {organization.name}
    </h1>
    
    <div class="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h2 class="text-2xl font-semibold mb-4">Explore Organizations by Shared Characteristics</h2>
      
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-3">Focus Areas</h3>
        <div class="flex flex-wrap gap-2">
          {#each organization.focusAreas as area}
            <button
              on:click={() => handleFocusAreaClick(area)}
              class="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
            >
              {getFocusAreaLabel(area)}
            </button>
          {/each}
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-medium mb-3">Engagement Types</h3>
        <div class="flex flex-wrap gap-2">
          {#each organization.engagementTypes as type}
            <button
              on:click={() => handleEngagementTypeClick(type)}
              class="bg-green-100 text-green-800 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors"
            >
              {type}
            </button>
          {/each}
        </div>
      </div>
    </div>
    
    <p class="text-gray-600 mb-8">
      Showing organizations that share focus areas and engagement types with {organization.name}.
      Organizations are sorted by the number of shared characteristics.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each relatedOrganizations as org (org.id)}
        <OrganizationCard {org} />
      {/each}
    </div>
    
    {#if relatedOrganizations.length === 0}
      <p class="text-center text-gray-600 py-12">
        No related organizations found.
      </p>
    {/if}
  </div>
{:else}
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold text-red-600">Organization not found</h1>
    <Link to="/organizations" class="text-secondary hover:text-primary mt-4 inline-block">
      Return to Organizations
    </Link>
  </div>
{/if} 