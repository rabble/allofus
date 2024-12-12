<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { user } from '$lib/stores/authStore';
  import AdminControls from '$lib/components/AdminControls.svelte';

  const userOrganizations = writable<Array<{
    id: string;
    name: string;
    description: string;
    approved: boolean;
  }>>([]);

  const fetchUserOrganizations = async () => {
    try {
      const response = await fetch('/api/organizations/user');
      if (response.ok) {
        const data = await response.json();
        userOrganizations.set(data);
      }
    } catch (error) {
      console.error('Failed to fetch user organizations:', error);
    }
  };

  onMount(() => {
    fetchUserOrganizations();
  });
</script>

<div class="container mx-auto px-4 py-8">
  <div class="flex justify-between items-center mb-6">
    <h1 class="text-2xl font-bold">Dashboard</h1>
    <a 
      href="/add-organization"
      class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
    >
      Add New Organization
    </a>
  </div>

  <AdminControls show={true}>
    <a 
      href="/admin/organizations" 
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      Manage All Organizations
    </a>
    <a 
      href="/admin/topics" 
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      Manage Topics
    </a>
    <a 
      href="/admin/users" 
      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      Manage Users
    </a>
  </AdminControls>

  <div class="bg-white shadow rounded-lg p-6">
    <h2 class="text-xl font-semibold mb-4">My Organizations</h2>
    {#if $userOrganizations.length === 0}
      <p class="text-gray-500">
        You haven't created any organizations yet. 
        <a href="/add-organization" class="text-primary hover:underline">
          Create your first organization
        </a>
      </p>
    {:else}
      <div class="space-y-4">
        {#each $userOrganizations as org}
          <div class="border rounded-lg p-4 flex justify-between items-center">
            <div>
              <h3 class="font-medium">{org.name}</h3>
              <p class="text-sm text-gray-500">
                Status: {org.approved ? 'Approved' : 'Pending Approval'}
              </p>
            </div>
            <div class="space-x-2">
              <a 
                href={`/admin/edit-organization/${org.id}`}
                class="text-primary hover:underline text-sm"
              >
                Edit
              </a>
              <a 
                href={`/organizations/${org.id}`}
                class="text-gray-600 hover:underline text-sm"
              >
                View
              </a>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>
