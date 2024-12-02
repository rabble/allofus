<script lang="ts">
  import type { Report } from '../../types/content';
  import { Link } from 'svelte-routing';
  import { organizations } from '../../data/organizations';
  
  export let reports: Report[];
  
  function getOrgName(orgId: string): string {
    return organizations.find(org => org.id === orgId)?.name || 'Unknown Organization';
  }
</script>

<div class="space-y-6">
  {#each reports as report}
    <div class="bg-white rounded-lg shadow overflow-hidden">
      {#if report.image}
        <img 
          src={report.image} 
          alt={report.title}
          class="w-full h-48 object-cover"
        />
      {/if}
      <div class="p-4">
        <div class="flex justify-between items-start mb-2">
          <Link 
            to={`/organizations/${report.organizationId}`}
            class="text-secondary hover:text-primary font-medium"
          >
            {getOrgName(report.organizationId)}
          </Link>
          <span class="text-sm text-gray-500">{new Date(report.date).toLocaleDateString()}</span>
        </div>
        <h3 class="text-xl font-semibold mb-2">{report.title}</h3>
        <p class="text-gray-700 mb-4">{report.summary}</p>
        <Link 
          to={`/reports/${report.id}`}
          class="text-secondary hover:text-primary inline-block"
        >
          Read full report →
        </Link>
      </div>
    </div>
  {/each}
</div> 