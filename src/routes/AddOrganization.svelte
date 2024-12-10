<script lang="ts">
  import { onMount } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import Select from 'svelte-select';
  import { focusAreas, engagementTypes } from "../lib/data/options";
  import { checkAuth } from '../lib/utils/auth';
  import { navigate } from 'svelte-routing';



  onMount(async () => {
    const isAuthed = await checkAuth();
    if (!isAuthed) {
      navigate('/login');
    }
  });

  interface SocialMediaLinks {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    bluesky: string;
    threads: string;
    mastodon: string;
    nostr: string;
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

  // Define all writable stores for form fields
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
  const mission = writable('');
  const size = writable('');
  const foundedYear = writable('');
  const geographicScope = writable('');
  const volunteerNeeds = writable('');
  const socialMediaLinks = writable<SocialMediaLinks>({
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    bluesky: '',
    threads: '',
    mastodon: '',
    nostr: ''
  });

  // Selected options stores
  const selectedFocusAreas = writable<string[]>([]);
  const selectedEngagementTypes = writable<string[]>([]);

  // Form state
  let isSubmitting = false;
  let errorMessage = '';
  let successMessage = '';

  // Handle form submission
  const handleSubmit = async () => {
    try {
      isSubmitting = true;
      errorMessage = '';

      // Validate required fields
      if (!$name) {
        errorMessage = 'Organization name is required';
        return;
      }
      if (!$email) {
        errorMessage = 'Contact email is required';
        return;
      }
      if (!$position) {
        errorMessage = 'Your position is required';
        return;
      }
      if (!$orgEmail) {
        errorMessage = 'Organization email is required';
        return;
      }
      if (!$description) {
        errorMessage = 'Description is required';
        return;
      }
      if ($selectedFocusAreas.length === 0) {
        errorMessage = 'Please select at least one focus area';
        return;
      }
      if ($selectedEngagementTypes.length === 0) {
        errorMessage = 'Please select at least one engagement type';
        return;
      }

     
      const organizationData = {
        name: $name,
        logo: $logo,
        locations: $locations.split(',').map(l => l.trim()),
        website: $website,
        contact: {
          email: $email,
          phone: $phone
        },
        focusAreas: $selectedFocusAreas,
        engagementTypes: $selectedEngagementTypes,
        description: $description,
        mission: $mission,
        size: $size,
        foundedYear: $foundedYear,
        geographicScope: $geographicScope,
        volunteerNeeds: $volunteerNeeds,
        socialMedia: {
          twitter: $socialMediaLinks.twitter,
          facebook: $socialMediaLinks.facebook,
          instagram: $socialMediaLinks.instagram,
          linkedin: $socialMediaLinks.linkedin,
          bluesky: $socialMediaLinks.bluesky,
          threads: $socialMediaLinks.threads,
          mastodon: $socialMediaLinks.mastodon,
          nostr: $socialMediaLinks.nostr
        },
        joinNowLink: $joinNowLink,
        
      };

      const response = await fetch('/api/organizations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(organizationData)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create organization');
      }

      const newOrg = await response.json();
      successMessage = 'Organization created successfully!';
      
      if (newOrg.approved) {
        successMessage += ' Your organization is now live in the directory.';
      } else {
        successMessage += ' Your organization will be reviewed by an admin before appearing in the directory.';
      }

      // Wait a moment to show the success message
      setTimeout(() => {
        navigate(`/organizations/${newOrg.id}`);
      }, 2000);

    } catch (error) {
      console.error('Error creating organization:', error);
      if (error.message.includes('Unauthorized')) {
        errorMessage = 'Please log in to create an organization.';
        setTimeout(() => navigate('/login'), 2000);
      } else {
        errorMessage = error.message || 'Failed to create organization. Please try again.';
      }
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
      <label for="mission" class="block text-sm font-medium text-gray-700 mb-1">
        Mission Statement *
      </label>
      <textarea
        id="mission"
        required
        bind:value={$mission}
        class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
        rows="3"
        placeholder="Organization's mission statement"
      ></textarea>
    </div>

    <div>
      <label for="focus-areas-select" class="block text-sm font-medium text-gray-700 mb-2">
        Focus Areas *
      </label>
      <Select
        id="focus-areas-select"
        items={focusAreas}
        bind:value={$selectedFocusAreas}
        multiple={true}
        placeholder="Select focus areas..."
        itemText="label"
        inputAttributes={{ id: 'focus-areas-select' }}
      />
    </div>

    <div>
      <label for="engagement-types-select" class="block text-sm font-medium text-gray-700 mb-2">
        Engagement Types *
      </label>
      <Select
        id="engagement-types-select"
        items={engagementTypes}
        bind:value={$selectedEngagementTypes}
        multiple={true}
        placeholder="Select engagement types..."
        itemText="label"
        inputAttributes={{ id: 'engagement-types-select' }}
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label for="size" class="block text-sm font-medium text-gray-700 mb-1">
          Organization Size
        </label>
        <select
          id="size"
          bind:value={$size}
          class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">Select size...</option>
          <option value="1-10">1-10 people</option>
          <option value="11-50">11-50 people</option>
          <option value="51-200">51-200 people</option>
          <option value="201+">201+ people</option>
        </select>
      </div>

      <div>
        <label for="foundedYear" class="block text-sm font-medium text-gray-700 mb-1">
          Founded Year
        </label>
        <input
          type="number"
          id="foundedYear"
          bind:value={$foundedYear}
          class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          min="1800"
          max={new Date().getFullYear()}
          placeholder="YYYY"
        />
      </div>
    </div>

    <div>
      <label for="geographicScope" class="block text-sm font-medium text-gray-700 mb-1">
        Geographic Scope *
      </label>
      <select
        id="geographicScope"
        required
        bind:value={$geographicScope}
        class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
      >
        <option value="">Select scope...</option>
        <option value="local">Local</option>
        <option value="regional">Regional</option>
        <option value="national">National</option>
        <option value="international">International</option>
      </select>
    </div>

    <div>
      <label for="volunteerNeeds" class="block text-sm font-medium text-gray-700 mb-1">
        Volunteer Needs
      </label>
      <textarea
        id="volunteerNeeds"
        bind:value={$volunteerNeeds}
        class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
        rows="3"
        placeholder="Describe your organization's volunteer needs..."
      ></textarea>
    </div>

    <div class="space-y-4">
      <h3 class="text-lg font-medium text-gray-700">Social Media</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="twitter" class="block text-sm font-medium text-gray-700 mb-1">
            Twitter
          </label>
          <input
            type="url"
            id="twitter"
            bind:value={$socialMediaLinks.twitter}
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Twitter username"
          />
        </div>
        <div>
          <label for="bluesky" class="block text-sm font-medium text-gray-700 mb-1">
            Bluesky
          </label>
          <input
            type="url"
            id="bluesky"
            bind:value={$socialMediaLinks.bluesky}
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Bluesky handle"
          />
        </div>
        <div>
          <label for="mastodon" class="block text-sm font-medium text-gray-700 mb-1">
            Mastodon
          </label>
          <input
            type="url"
            id="mastodon"
            bind:value={$socialMediaLinks.mastodon}
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Mastodon address"
          />
        </div>
        <div>
          <label for="nostr" class="block text-sm font-medium text-gray-700 mb-1">
            Nostr
          </label>
          <input
            type="url"
            id="nostr"
            bind:value={$socialMediaLinks.nostr}
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Nostr (name/npub/nip-05)"
          />
        </div>
        <div>
          <label for="threads" class="block text-sm font-medium text-gray-700 mb-1">
            Threads
          </label>
          <input
            type="url"
            id="threads"
            bind:value={$socialMediaLinks.threads}
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Threads username"
          />
        </div>
        <div>
          <label for="instagram" class="block text-sm font-medium text-gray-700 mb-1">
            Instagram
          </label>
          <input
            type="url"
            id="instagram"
            bind:value={$socialMediaLinks.instagram}
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Instagram username"
          />
        </div>
        <div>
          <label for="facebook" class="block text-sm font-medium text-gray-700 mb-1">
            Facebook
          </label>
          <input
            type="url"
            id="facebook"
            bind:value={$socialMediaLinks.facebook}
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Facebook username"
          />
        </div>
        <div>
          <label for="linkedin" class="block text-sm font-medium text-gray-700 mb-1">
            LinkedIn
          </label>
          <input
            type="url"
            id="linkedin"
            bind:value={$socialMediaLinks.linkedin}
            class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="LinkedIn username"
          />
        </div>
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