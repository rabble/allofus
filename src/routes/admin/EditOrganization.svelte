<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  // Define writable stores for form fields
  const name = writable('Sample Organization');
  const logo = writable('https://example.com/logo.png');
  const locations = writable('New York, Los Angeles');
  const website = writable('https://example.com');
  const email = writable('contact@example.com');
  const phone = writable('123-456-7890');
  const focusAreas = writable('Technology, Education');
  const engagementTypes = writable('Partnership, Sponsorship');
  const staffRange = writable<[number, number]>([10, 50]);
  const usersCount = writable(100);
  const membersCount = writable(200);
  const projects = writable('Project A, Project B');
  const description = writable('This is a sample organization description.');
  const joinNowLink = writable('https://example.com/join');

  // Handle form submission
  const handleSubmit = () => {
    const updatedOrganization = {
      name: $name,
      logo: $logo,
      locations: $locations.split(',').map(loc => loc.trim()),
      website: $website,
      contact: {
        email: $email,
        phone: $phone
      },
      focusAreas: $focusAreas.split(',').map(area => area.trim()),
      engagementTypes: $engagementTypes.split(',').map(type => type.trim()),
      staff: {
        range: $staffRange,
        description: `Staff range: ${$staffRange[0]} - ${$staffRange[1]}`
      },
      usersCount: $usersCount,
      membersCount: $membersCount,
      projects: $projects.split(',').map(proj => proj.trim()),
      description: $description,
      joinNowLink: $joinNowLink
    };

    // For demonstration, log the updated organization
    console.log('Updated Organization:', updatedOrganization);

    // Optionally, you can add logic to save the updated organization
  };
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-6">Edit Organization</h1>
  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    <div>
      <label for="name" class="block text-sm font-medium">Organization Name</label>
      <input type="text" id="name" bind:value={$name} class="w-full px-4 py-2 border rounded-md" required />
    </div>
    <div>
      <label for="logo" class="block text-sm font-medium">Logo URL</label>
      <input type="text" id="logo" bind:value={$logo} class="w-full px-4 py-2 border rounded-md" />
    </div>
    <div>
      <label for="locations" class="block text-sm font-medium">Locations (comma-separated)</label>
      <input type="text" id="locations" bind:value={$locations} class="w-full px-4 py-2 border rounded-md" />
    </div>
    <div>
      <label for="website" class="block text-sm font-medium">Website</label>
      <input type="url" id="website" bind:value={$website} class="w-full px-4 py-2 border rounded-md" />
    </div>
    <div>
      <label for="email" class="block text-sm font-medium">Email</label>
      <input type="email" id="email" bind:value={$email} class="w-full px-4 py-2 border rounded-md" />
    </div>
    <div>
      <label for="phone" class="block text-sm font-medium">Phone</label>
      <input type="tel" id="phone" bind:value={$phone} class="w-full px-4 py-2 border rounded-md" />
    </div>
    <div>
      <label for="focusAreas" class="block text-sm font-medium">Focus Areas (comma-separated)</label>
      <input type="text" id="focusAreas" bind:value={$focusAreas} class="w-full px-4 py-2 border rounded-md" />
    </div>
    <div>
      <label for="engagementTypes" class="block text-sm font-medium">Engagement Types (comma-separated)</label>
      <input type="text" id="engagementTypes" bind:value={$engagementTypes} class="w-full px-4 py-2 border rounded-md" />
    </div>
    <div>
      <label for="staffRange" class="block text-sm font-medium">Staff Range</label>
      <input type="number" id="staffMin" bind:value={$staffRange[0]} class="w-1/2 px-4 py-2 border rounded-md" placeholder="Min" />
      <input type="number" id="staffMax" bind:value={$staffRange[1]} class="w-1/2 px-4 py-2 border rounded-md" placeholder="Max" />
    </div>
    <div>
      <label for="usersCount" class="block text-sm font-medium">Number of Users</label>
      <input type="number" id="usersCount" bind:value={$usersCount} class="w-full px-4 py-2 border rounded-md" />
    </div>
    <div>
      <label for="membersCount" class="block text-sm font-medium">Number of Members</label>
      <input type="number" id="membersCount" bind:value={$membersCount} class="w-full px-4 py-2 border rounded-md" />
    </div>
    <div>
      <label for="projects" class="block text-sm font-medium">Projects (comma-separated)</label>
      <input type="text" id="projects" bind:value={$projects} class="w-full px-4 py-2 border rounded-md" />
    </div>
    <div>
      <label for="description" class="block text-sm font-medium">Description</label>
      <textarea id="description" bind:value={$description} class="w-full px-4 py-2 border rounded-md" rows="4"></textarea>
    </div>
    <div>
      <label for="joinNowLink" class="block text-sm font-medium">Join Now Link</label>
      <input type="url" id="joinNowLink" bind:value={$joinNowLink} class="w-full px-4 py-2 border rounded-md" />
    </div>
    <button type="submit" class="bg-primary text-white px-6 py-2 rounded-md">Update Organization</button>
  </form>
</div>