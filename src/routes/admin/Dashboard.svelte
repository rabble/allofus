<script lang="ts">
  import { writable } from 'svelte/store';
  import { organizations as allOrganizations } from '$lib/data/organizations';

  // Convert the imported organizations to a writable store for reactivity
  const organizations = writable(allOrganizations);

  const newSubmissions = writable([
    { id: '4', name: 'New Org One' },
    { id: '5', name: 'New Org Two' }
  ]);

  // Toggle visibility status
  const toggleVisibility = (id: string) => {
    organizations.update(orgs =>
      orgs.map(org => org.id === id ? { ...org, visible: !org.visible } : org)
    );
  };
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-6">Admin Dashboard</h1>

  <section class="mb-8">
    <h2 class="text-2xl font-semibold mb-4">Existing Organizations</h2>
    <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr>
          <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
          <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Visible</th>
          <th class="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
        </tr>
      </thead>
      <tbody>
        {#each $organizations as org}
          <tr class="border-t">
            <td class="px-6 py-4">{org.name}</td>
            <td class="px-6 py-4">
              <button
                on:click={() => toggleVisibility(org.id)}
                class="text-sm text-blue-500 hover:underline"
              >
                {org.visible ? 'Visible' : 'Hidden'}
              </button>
            </td>
            <td class="px-6 py-4">
              <a href={`/admin/edit-organization/${org.id}`} class="text-sm text-blue-500 hover:underline">
                Edit
              </a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </section>

  <section>
    <h2 class="text-2xl font-semibold mb-4">New Submissions</h2>
    <ul class="list-disc pl-6">
      {#each $newSubmissions as submission}
        <li class="mb-2">
          {submission.name}
          <a href={`/admin/edit-organization/${submission.id}`} class="ml-4 text-sm text-blue-500 hover:underline">
            Review
          </a>
        </li>
      {/each}
    </ul>
  </section>
</div>