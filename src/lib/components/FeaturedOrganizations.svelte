<script lang="ts">
  import { Link } from "svelte-routing";
  import { organizations } from "../data/organizations";
  import OrganizationCard from "./organizations/OrganizationCard.svelte";

  // Randomly select 4 organizations
  const featuredOrgs = [...organizations]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);
</script>

<section class="mt-12">
  <h2 class="text-2xl font-bold text-primary mb-6">A few regularly updated organizations</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    {#each featuredOrgs as org (org.id)}
      <OrganizationCard {org} />
    {/each}
  </div>
  
  <div class="text-center">
    <Link 
      to="/organizations" 
      class="inline-block bg-secondary hover:bg-primary text-white px-6 py-3 rounded-md transition-colors"
    >
      View All Organizations
    </Link>
  </div>
</section>