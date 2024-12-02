<script lang="ts">
  import { organizations } from '../lib/data/organizations';
  import { focusAreas } from '../lib/data/options';
  import { Link, navigate } from 'svelte-routing';
  
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
    if (!organization) return [];
    return organizations
      .filter(org => org.id !== currentOrgId)
      .map(org => {
        const commonFocusAreas = org.focusAreas.filter(area => organization.focusAreas.includes(area)).length;
        const commonEngagementTypes = org.engagementTypes.filter(type => organization.engagementTypes.includes(type)).length;
        const similarityScore = commonFocusAreas + commonEngagementTypes;
        return { ...org, similarityScore };
      })
      .sort((a, b) => b.similarityScore - a.similarityScore)
      .slice(0, 10);
  }
</script>

{#if organization}
  <div class="max-w-4xl mx-auto px-4 py-8 flex">
    <div class="flex-1">
      <Link to="/organizations" class="text-secondary hover:text-primary mb-6 inline-block">
        ← Back to Organizations
      </Link>
      
      <div class="bg-white shadow-lg rounded-lg p-8">
        <div class="flex items-start justify-between mb-6 h-32">
          <div>
            <h1 class="text-4xl font-bold text-primary mb-2">{organization.name}</h1>
            <span class="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              {organization.category}
            </span>
          </div>
          {#if organization.logo}
            <img 
              src={organization.logo} 
              alt={`${organization.name} logo`} 
              class="h-full w-auto object-contain"
            />
          {/if}
        </div>
        
        <div class="prose max-w-none mb-8">
          <p class="text-lg">{organization.description}</p>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Organization Details</h2>
          <p class="text-sm text-gray-500 mb-2">*All numbers are estimates.</p>
          <ul class="list-disc list-inside text-sm text-gray-600">
            {#if organization.membersCount}
              <li>Members: {organization.membersCount}</li>
            {/if}
            {#if organization.staff}
              <li>
                Staff: {organization.staff.range[0]} - {organization.staff.range[1]} 
                <span class="block text-gray-500">{organization.staff.description}</span>
              </li>
            {/if}
            {#if organization.supporter}
              <li>
                Supporters: {organization.supporter.range[0]} - {organization.supporter.range[1]} 
                <span class="block text-gray-500">{organization.supporter.description}</span>
              </li>
            {/if}
            {#if organization.locations && organization.locations.length > 0}
              <li>
                Locations: 
                {#each organization.locations as location, index}
                  <Link 
                    to={`/locations/${encodeURIComponent(location)}`} 
                    class="text-secondary hover:text-primary"
                  >
                    {location}
                  </Link>{index < organization.locations.length - 1 ? ', ' : ''}
                {/each}
              </li>
            {/if}
          </ul>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h2 class="text-xl font-semibold mb-4">Focus Areas</h2>
            <div class="flex flex-wrap gap-2">
              {#each organization.focusAreas as area}
                <button
                  on:click={() => handleFocusAreaClick(area)}
                  class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
                >
                  {getFocusAreaLabel(area)}
                </button>
              {/each}
            </div>
          </div>
          
          <div>
            <h2 class="text-xl font-semibold mb-4">Engagement Types</h2>
            <div class="flex flex-wrap gap-2">
              {#each organization.engagementTypes as type}
                <button
                  on:click={() => handleEngagementTypeClick(type)}
                  class="bg-green-100 text-green-800 px-3 py-1 rounded-full hover:bg-green-200 transition-colors"
                >
                  {type}
                </button>
              {/each}
            </div>
          </div>
        </div>
        
        <div class="mt-8 pt-8 border-t border-gray-200">
          <h2 class="text-xl font-semibold mb-4">Get Involved</h2>
          <div class="flex flex-wrap gap-4">
            {#if organization.website}
              <a 
                href={organization.website}
                target="_blank"
                rel="noopener noreferrer"
                class="bg-secondary hover:bg-primary text-white px-6 py-2 rounded-md transition-colors"
              >
                Visit Website
              </a>
            {/if}
            
            {#if organization.contact?.email}
              <a 
                href={`mailto:${organization.contact.email}`}
                class="bg-secondary hover:bg-primary text-white px-6 py-2 rounded-md transition-colors"
              >
                Contact Organization
              </a>
            {/if}
            
            {#if organization.socialMedia}
              <div class="flex gap-4 mt-4">
                {#each Object.entries(organization.socialMedia) as [platform, url]}
                  {#if url}
                    <a 
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-secondary hover:text-primary"
                    >
                      {platform}
                    </a>
                  {/if}
                {/each}
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
    <aside class="w-64 ml-8">
      <h2 class="text-xl font-semibold mb-4">10 Related Organizations</h2>
      <ul class="space-y-2">
        {#each relatedOrganizations as relatedOrg}
          <li>
            <Link to={`/organizations/${relatedOrg.id}`} class="text-secondary hover:text-primary">
              {relatedOrg.name}
            </Link>
          </li>
        {/each}
      </ul>
      {#if relatedOrganizations.length > 0}
        <Link 
          to={`/organizations/${id}/related`} 
          class="text-secondary hover:text-primary mt-4 inline-block"
        >
          View all related organizations →
        </Link>
      {/if}
    </aside>
  </div>
{:else}
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold text-red-600">Organization not found</h1>
    <Link to="/organizations" class="text-secondary hover:text-primary mt-4 inline-block">
      Return to Organizations
    </Link>
  </div>
{/if}