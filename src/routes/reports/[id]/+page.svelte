<script lang="ts">
  import { reports } from '$lib/data/reportsContent';
  import { organizations } from '$lib/data/organizations';
  
  export let data;
  const { report, organizationName } = data;
</script>

{#if report}
  <div class="container mx-auto px-4 py-8 max-w-3xl">
    <div class="flex items-center justify-between mb-8">
      <a href="/reports" class="text-secondary hover:text-primary">
        ← Back to Reports
      </a>
      <a 
        href={`/organizations/${report.organizationId}`}
        class="text-secondary hover:text-primary"
      >
        {organizationName} →
      </a>
    </div>

    <article class="bg-white shadow-lg rounded-lg overflow-hidden">
      {#if report.image}
        <img 
          src={report.image} 
          alt={report.title}
          class="w-full h-64 object-cover"
        />
      {/if}
      
      <div class="p-8">
        <div class="mb-6">
          <h1 class="text-3xl font-bold text-primary mb-4">{report.title}</h1>
          <div class="flex items-center justify-between text-gray-600">
            <span>{new Date(report.date).toLocaleDateString()}</span>
            {#if report.link}
              <a 
                href={report.link}
                target="_blank"
                rel="noopener noreferrer"
                class="text-secondary hover:text-primary"
              >
                View Original Source →
              </a>
            {/if}
          </div>
        </div>

        <div class="prose max-w-none">
          <p class="text-xl text-gray-600 mb-8">{report.summary}</p>
          <div class="text-gray-800">
            {report.content}
          </div>
        </div>
      </div>
    </article>
  </div>
{:else}
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold text-red-600">Report not found</h1>
    <a href="/reports" class="text-secondary hover:text-primary mt-4 inline-block">
      Return to Reports
    </a>
  </div>
{/if}
