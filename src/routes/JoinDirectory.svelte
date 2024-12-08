<script lang="ts">
  import { Link } from "svelte-routing";
  import Select from 'svelte-select';
  import { focusAreas, engagementTypes } from "../lib/data/options";
  import type { Writable } from 'svelte/store';

  let orgName = '';
  let location = '';
  let contactEmail = '';
  let position = '';
  let orgEmail = '';
  let projects = '';
  let description = '';
  let website = '';
  let selectedFocusAreas: string[] = [];
  let selectedEngagementTypes: string[] = [];

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    // TODO: Implement form submission
    console.log({
      orgName,
      location,
      contactEmail,
      position,
      orgEmail,
      projects,
      description,
      website,
      selectedFocusAreas,
      selectedEngagementTypes
    });
  };
</script>

<div class="container mx-auto px-4 py-8 max-w-4xl">
  <!-- Header content -->
  <h1 class="text-3xl font-bold text-primary mb-4">Apply to Join the All of Us Directory</h1>
  
  <div class="mb-8">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">
      Does Your Organization Align with and want to be included in the AllofUS directory?
    </h2>
    
    <p class="text-base text-gray-700 mb-6">
      Fill out the form below, the entries will populate your unique organization page in the All of US Directory
    </p>
    
    <p class="text-base text-gray-700 mb-4">
      We welcome groups to join our directory if you meet these criteria:
    </p>

    <ul class="list-disc pl-6 mb-6 text-base text-gray-700 space-y-2">
      <li>Your organization is active in the U.S.</li>
      <li>Your organization is able to welcome and orient desired new members and/or volunteers.</li>
      <li>Your organization takes a progressive, liberatory approach to the issues it focuses on.</li>
      <li>Your organization is non-Commercial, i.e., does it not prioritize profit-making over its core values.</li>
      <li>Your organization avoids divisive sectarianism and ideological purity tests.</li>
      <li>Your organization values mutual support and collective action.</li>
    </ul>

    <p class="text-base text-gray-600 italic mb-6">
      Subtext: All sects, whiners, complainers, no good counterproductive my-way-or-the-highway types – steer clear.
    </p>

    <p class="text-base text-gray-700 mb-8">
      If Your organization complies with the six conditions noted above, and you wish to be in the AllofUS directory, please fill out the form below. In a few days we will reply. If all goes well, we will send an ID and PW you can use to access a second form whose contents, once you complete and submit it, will automatically compose a unique page for your organization in the AllofUS Directory.
    </p>
  </div>

  <form on:submit={handleSubmit} class="space-y-6">
    <div>
      <label for="orgName" class="block text-sm font-medium text-gray-700">Organization Name</label>
      <input type="text" id="orgName" bind:value={orgName} required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    <div>
      <label for="location" class="block text-sm font-medium text-gray-700">Location (national, state(s), cities)</label>
      <input type="text" id="location" bind:value={location} required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Focus Areas</label>
      <Select
        items={focusAreas}
        bind:value={selectedFocusAreas}
        multiple={true}
        placeholder="Select focus areas..."
        itemText="label"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Engagement Types</label>
      <Select
        items={engagementTypes}
        bind:value={selectedEngagementTypes}
        multiple={true}
        placeholder="Select engagement types..."
        itemText="label"
      />
    </div>

    <div>
      <label for="contactEmail" class="block text-sm font-medium text-gray-700">Email of Person Requesting Membership</label>
      <input type="email" id="contactEmail" bind:value={contactEmail} required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    <div>
      <label for="position" class="block text-sm font-medium text-gray-700">Position/role in your Organization</label>
      <input type="text" id="position" bind:value={position} required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    <div>
      <label for="orgEmail" class="block text-sm font-medium text-gray-700">Organization's Email</label>
      <input type="email" id="orgEmail" bind:value={orgEmail} required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    <div>
      <label for="projects" class="block text-sm font-medium text-gray-700">Organization's Projects that could currently utilize volunteer help</label>
      <textarea id="projects" bind:value={projects} required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" rows="4"></textarea>
    </div>

    <div>
      <label for="description" class="block text-sm font-medium text-gray-700">Organization's Description</label>
      <textarea id="description" bind:value={description} required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" rows="4"></textarea>
    </div>

    <div>
      <label for="website" class="block text-sm font-medium text-gray-700">Organization's Web URL</label>
      <input type="url" id="website" bind:value={website} required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    <button 
      type="submit" 
      class="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors"
    >
      Submit Organization to All of Us Directory
    </button>
  </form>
</div> 