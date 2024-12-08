<script lang="ts">
  import { onMount } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import Select from 'svelte-select';
  import { focusAreas, engagementTypes } from "../lib/data/options";

  interface SocialMediaLinks {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  }

  interface Organization {
    name: string;
    logo: string;
    locations: string[];
    website: string;
    email: string;
    position: string;
    orgEmail: string;
    phone: string;
    focusAreas: string[];
    engagementTypes: string[];
    projects: string[];
    description: string;
    volunteerUrl: string;
    joinNowLink: string;
    socialMediaLinks: SocialMediaLinks;
  }

  // Define writable stores for form fields
  const name = writable('');
  const logo = writable('');
  const locations = writable('');
  const website = writable('');
  const email = writable('');
  const position = writable('');
  const orgEmail = writable('');
  const phone = writable('');
  const projects = writable('');
  const description = writable('');
  const volunteerUrl = writable('');
  const joinNowLink = writable('');
  const socialMediaLinks = writable({
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: ''
  });

  // Replace the string stores with array stores for selected options
  const selectedFocusAreas = writable<string[]>([]);
  const selectedEngagementTypes = writable<string[]>([]);

  let isSubmitting = false;
  let errorMessage = '';
  let successMessage = '';

  // Handle form submission
  const handleSubmit = async () => {
    try {
      isSubmitting = true;
      errorMessage = '';
      
      const newOrganization: Organization = {
        name: $name,
        logo: $logo,
        locations: $locations.split(',').map(loc => loc.trim()),
        website: $website,
        email: $email,
        position: $position,
        orgEmail: $orgEmail,
        phone: $phone,
        focusAreas: $selectedFocusAreas,
        engagementTypes: $selectedEngagementTypes,
        projects: $projects.split(',').map(proj => proj.trim()),
        description: $description,
        volunteerUrl: $volunteerUrl,
        joinNowLink: $joinNowLink,
        socialMediaLinks: $socialMediaLinks
      };

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      successMessage = 'Organization successfully added!';
      // Reset form fields
      name.set('');
      logo.set('');
      locations.set('');
      website.set('');
      email.set('');
      position.set('');
      orgEmail.set('');
      phone.set('');
      projects.set('');
      description.set('');
      volunteerUrl.set('');
      joinNowLink.set('');
      socialMediaLinks.set({
        facebook: '',
        twitter: '',
        instagram: '',
        linkedin: ''
      });
      
      // Add these to the reset logic
      selectedFocusAreas.set([]);
      selectedEngagementTypes.set([]);
      
    } catch (error) {
      errorMessage = 'Failed to add organization. Please try again.';
      console.error('Error:', error);
    } finally {
      isSubmitting = false;
    }
  };
</script>

{#if errorMessage}
  <div role="alert" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
    {errorMessage}
  </div>
{/if}

{#if successMessage}
  <div role="alert" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
    {successMessage}
  </div>
{/if}

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-primary mb-6">
    Use this form to create or update your unique organization page
  </h1>


  <form 
    on:submit|preventDefault={handleSubmit} 
    class="space-y-6"
    aria-label="Add Organization Form"
  >
    <p class="text-base text-gray-600 italic mb-6">Fields marked with * are required</p>

    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">
        Organization Name *
      </label>
      <input type="text" id="name" bind:value={$name} required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    <div>
      <label for="contactEmail" class="block text-sm font-medium text-gray-700">
        Email of Person Requesting Membership *
      </label>
      <input type="email" id="contactEmail" bind:value={$email} required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    <div>
      <label for="position" class="block text-sm font-medium text-gray-700">
        Your Position/Title/Role in your Organization *
      </label>
      <input type="text" id="position" bind:value={$position} required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    <div>
      <label for="orgEmail" class="block text-sm font-medium text-gray-700">
        Organization Email *
      </label>
      <input type="email" id="orgEmail" bind:value={$orgEmail} required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    <div>
      <label for="logo" class="block text-sm font-medium text-gray-700">
        Logo/Graphic
      </label>
      <input type="url" id="logo" bind:value={$logo} class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    <div>
      <label for="locations" class="block text-sm font-medium text-gray-700">
        Location (Choose National, State, and Enter City)
      </label>
      <input type="text" id="locations" bind:value={$locations} class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Focus Areas (choose as many as apply)
      </label>
      <Select
        items={focusAreas}
        bind:value={$selectedFocusAreas}
        multiple={true}
        placeholder="Select focus areas..."
        itemText="label"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Engagement Types (what the org would welcome/benefit from)
      </label>
      <Select
        items={engagementTypes}
        bind:value={$selectedEngagementTypes}
        multiple={true}
        placeholder="Select engagement types..."
        itemText="label"
      />
    </div>

    <div>
      <label for="projects" class="block text-sm font-medium text-gray-700">
        Organization Projects (that could currently utilize volunteer help)
      </label>
      <textarea id="projects" bind:value={$projects} rows="3" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
    </div>

    <div>
      <label for="description" class="block text-sm font-medium text-gray-700">
        Organization Description (however long you feel appropriate to facilitate users knowing if it makes sense to seek to join or volunteer)
      </label>
      <textarea id="description" bind:value={$description} rows="5" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"></textarea>
    </div>

    <div>
      <label for="website" class="block text-sm font-medium text-gray-700">
        Organization Web link (if you have one)
      </label>
      <input type="url" id="website" bind:value={$website} class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    <div>
      <label for="volunteerUrl" class="block text-sm font-medium text-gray-700">
        Organization Volunteer Link (if you have one)
      </label>
      <input type="url" id="volunteerUrl" bind:value={$volunteerUrl} class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    <div>
      <label for="joinNowLink" class="block text-sm font-medium text-gray-700">
        Organization Join link (if you have one)
      </label>
      <input type="url" id="joinNowLink" bind:value={$joinNowLink} class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">
        Organization Social Media links (if you have any) *
      </label>
      <div class="space-y-2 mt-1">
        <input 
          type="url" 
          placeholder="Facebook URL" 
          bind:value={$socialMediaLinks.facebook}
          class="block w-full px-4 py-2 border border-gray-300 rounded-md" 
        />
        <input 
          type="url" 
          placeholder="Twitter URL" 
          bind:value={$socialMediaLinks.twitter}
          class="block w-full px-4 py-2 border border-gray-300 rounded-md" 
        />
        <input 
          type="url" 
          placeholder="Instagram URL" 
          bind:value={$socialMediaLinks.instagram}
          class="block w-full px-4 py-2 border border-gray-300 rounded-md" 
        />
        <input 
          type="url" 
          placeholder="LinkedIn URL" 
          bind:value={$socialMediaLinks.linkedin}
          class="block w-full px-4 py-2 border border-gray-300 rounded-md" 
        />
      </div>
    </div>

    <div class="mt-8 flex items-center gap-8">
      <button 
        type="submit" 
        class="shrink-0 bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {#if isSubmitting}
          <span class="inline-block animate-spin mr-2">↻</span>
        {/if}
        {isSubmitting ? 'Adding Organization...' : 'Add Organization'}
      </button>

      <p class="text-gray-600 italic">
        When you submit the above form it will populate your organization's unique directory page which will then be searchable by users seeking to become involved.
      </p>
    </div>
  </form>

</div>