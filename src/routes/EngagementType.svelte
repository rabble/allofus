<script lang="ts">
  import { organizations } from "../lib/data/organizations";
  import OrganizationCard from "../lib/components/organizations/OrganizationCard.svelte";
  import Sidebar from "../lib/components/sidebar/Sidebar.svelte";
  import { setCurrentEngagementType } from "../lib/stores/filterStore";
  
  export let type: string;
  
  $: {
    setCurrentEngagementType(type);
  }
  
  $: filteredOrgs = organizations.filter(org => 
    org.engagementTypes.includes(type)
  );
  
  $: typeLabel = type.charAt(0).toUpperCase() + type.slice(1);
</script>

<div class="container mx-auto px-4 py-8">
  <div class="flex gap-8">
    <Sidebar currentEngagementType={type} />
    
    <div class="flex-1">
      <h1 class="text-3xl font-bold text-primary mb-6">Organizations: {typeLabel} Engagement</h1>
      
      {#if filteredOrgs.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {#each filteredOrgs as org (org.id)}
            <OrganizationCard {org} />
          {/each}
        </div>
      {:else}
        <p class="text-gray-600">No organizations found for this engagement type.</p>
      {/if}
    </div>
  </div>
</div>