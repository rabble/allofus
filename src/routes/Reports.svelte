<script lang="ts">
  import { reports } from '../lib/data/reportsContent';
  import ReportsList from '../lib/components/content/ReportsList.svelte';
  import { Link } from 'svelte-routing';
  
  $: sortedReports = [...reports]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
</script>

<div class="container mx-auto px-4 py-8 max-w-4xl">
  <div class="flex items-center justify-between mb-8">
    <h1 class="text-3xl font-bold text-primary">Organization Reports</h1>
    <Link to="/" class="text-secondary hover:text-primary">
      ← Back to Home
    </Link>
  </div>

  <div class="bg-white shadow-lg rounded-lg p-8">
    <p class="text-gray-600 mb-8">
      Read detailed reports, newsletters, blogs, and articles from organizations in our network.
    </p>

    {#if sortedReports.length > 0}
      <ReportsList reports={sortedReports} />
    {:else}
      <p class="text-center text-gray-600 py-12">
        No reports available at this time.
      </p>
    {/if}
  </div>
</div> 