<script lang="ts">
  import { organizations } from '../lib/data/organizations';
  import { socialPosts } from '../lib/data/socialContent';
  import { reports } from '../lib/data/reportsContent';
  import { Link, navigate } from 'svelte-routing';
  import AnnouncementFeed from '../lib/components/content/AnnouncementFeed.svelte';
  import ReportsList from '../lib/components/content/ReportsList.svelte';
  
  export let id: string;
  
  $: organization = organizations.find(org => org.id === id);
  $: organizationPosts = socialPosts.filter(post => post.organizationId === id);
  $: organizationReports = reports.filter(report => report.organizationId === id);
  $: relatedOrganizations = organization ? findRelatedOrganizations(id) : [];
  
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
  <div class="max-w-6xl mx-auto px-4 py-8 flex">
    <div class="flex-1">
      <Link to="/organizations" class="text-secondary hover:text-primary mb-6 inline-block">
        ← Back to Organizations
      </Link>
      
      <div class="bg-white shadow-lg rounded-lg p-8">
        <div class="flex items-start justify-between mb-6">
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
              class="h-16 w-auto object-contain"
            />
          {/if}
        </div>
        
        <div class="prose max-w-none mb-8">
          <p class="text-lg">{organization.description}</p>
        </div>

        <!-- Organization Details -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Organization Details</h2>
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
        
        <!-- Focus Areas and Engagement Types -->
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 class="text-xl font-semibold mb-4">Focus Areas</h2>
            <div class="flex flex-wrap gap-2">
              {#each organization.focusAreas as area}
                <button
                  on:click={() => navigate(`/focus-areas/${area}`)}
                  class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
                >
                  {area}
                </button>
              {/each}
            </div>
          </div>
          
          <div>
            <h2 class="text-xl font-semibold mb-4">Engagement Types</h2>
            <div class="flex flex-wrap gap-2">
              {#each organization.engagementTypes as type}
                <button
                  on:click={() => navigate(`/engagement-types/${type.toLowerCase()}`)}
                  class="bg-green-100 text-green-800 px-3 py-1 rounded-full hover:bg-green-200 transition-colors"
                >
                  {type}
                </button>
              {/each}
            </div>
          </div>
        </div>
        
        <!-- Updates and Reports Side by Side -->
        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <!-- Social Media Updates Section -->
          <div>
            <h2 class="text-2xl font-semibold mb-4">Latest Updates</h2>
            {#if organizationPosts.length > 0}
              <AnnouncementFeed announcements={organizationPosts} />
            {:else}
              <p class="text-gray-600">No updates available at this time.</p>
            {/if}
          </div>
          
          <!-- Reports Section -->
          <div>
            <h2 class="text-2xl font-semibold mb-4">Reports and Articles</h2>
            {#if organizationReports.length > 0}
              <ReportsList reports={organizationReports} />
            {:else}
              <p class="text-gray-600">No reports available at this time.</p>
            {/if}
          </div>
        </div>
      </div>
    </div>

    <!-- Related Organizations Sidebar -->
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