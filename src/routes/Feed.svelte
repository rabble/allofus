<script lang="ts">
  import { socialPosts } from '../lib/data/socialContent';
  import { reports } from '../lib/data/reportsContent';
  import { organizations } from '../lib/data/organizations';
  import { Link } from 'svelte-routing';

  function getOrganizationDetails(orgId: string) {
    return organizations.find(o => o.id === orgId) || { name: 'Unknown Organization', logo: '' };
  }
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold text-primary mb-6">Social Media Feeds from All of Us Organizations</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Social Posts Column -->
    <div>
      <h2 class="text-3xl font-semibold mb-4">Social Posts</h2>
      <div class="space-y-6">
        {#each socialPosts as post}
          <div class="bg-white shadow-lg rounded-lg p-6">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-2xl font-semibold">{post.title}</h3>
              {#if getOrganizationDetails(post.organizationId).logo}
                <img src={getOrganizationDetails(post.organizationId).logo} alt="{getOrganizationDetails(post.organizationId).name} logo" class="h-16 w-16 object-contain ml-3" />
              {/if}
            </div>
            <p class="text-lg font-medium text-gray-700 mb-2">by {getOrganizationDetails(post.organizationId).name}</p>
            <p class="text-gray-600 mb-4">{post.summary}</p>
            <Link to={post.link} class="text-blue-500 hover:underline">
              Read more
            </Link>
            <p class="text-sm text-gray-500 mt-2">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Reports Column -->
    <div>
      <h2 class="text-3xl font-semibold mb-4">Reports</h2>
      <div class="space-y-6">
        {#each reports as report}
          <div class="bg-white shadow-lg rounded-lg p-6">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-2xl font-semibold">{report.title}</h3>
              {#if getOrganizationDetails(report.organizationId).logo}
                <img src={getOrganizationDetails(report.organizationId).logo} alt="{getOrganizationDetails(report.organizationId).name} logo" class="h-16 w-16 object-contain ml-3" />
              {/if}
            </div>
            <p class="text-lg font-medium text-gray-700 mb-2">by {getOrganizationDetails(report.organizationId).name}</p>
            <p class="text-gray-600 mb-4">{report.summary}</p>
            <Link to={report.link} class="text-blue-500 hover:underline">
              Read more
            </Link>
            <p class="text-sm text-gray-500 mt-2">
              {new Date(report.date).toLocaleDateString()}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div> 