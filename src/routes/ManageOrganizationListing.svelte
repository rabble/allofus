<script lang="ts">
  // console.log('=== COMPONENT START ===');

  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import Select from 'svelte-select';
  import { focusAreas, engagementTypes } from "../lib/data/options";
  import { checkAuth } from '../lib/utils/auth';
  import { navigate } from 'svelte-routing';
  import { organizations as orgData } from '../lib/data/organizations';
  
  // console.log('=== IMPORTS LOADED ===');
  // console.log('orgData:', orgData);
  
  // Create stores
  const organizationsStore = writable(orgData);
  const isAdmin = writable(true);
  const searchQuery = writable('');
  const searchResults = writable<Array<any>>([]);
  const selectedOrgId = writable<string | null>(null);
  const name = writable('');
  const contactEmail = writable('');
  const position = writable('');
  const orgEmail = writable('');
  const logo = writable('');
  const location = writable({
    national: false,
    state: '',
    city: ''
  });
  const selectedFocusAreas = writable([]);
  const selectedEngagementTypes = writable([]);
  const projects = writable('');
  const description = writable('');
  const websiteUrl = writable('');
  const volunteerUrl = writable('');
  const joinUrl = writable('');
  const socialMediaLinks = writable({
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    bluesky: '',
    threads: '',
    mastodon: '',
    nostr: ''
  });
  const showSocialFeeds = writable(false);
  const membersCount = writable<number | undefined>(undefined);
  const staffRange = writable<[number, number]>([0, 0]);
  const staffDescription = writable('');
  const supporterRange = writable<[number, number]>([0, 0]);
  const supporterDescription = writable('');

  // console.log('=== STORES CREATED ===');

  onMount(() => {
    // console.log('=== COMPONENT MOUNTED ===');
    // console.log('Store values:', {
    //   organizations: $organizationsStore,
    //   isAdmin: $isAdmin,
    //   searchResults: $searchResults,
    //   selectedOrgId: $selectedOrgId
    // });
  });

  // Watch for changes in selectedOrgId
  $: if ($selectedOrgId) {
    loadOrganizationData();
    // Clear search results when an organization is selected
    searchResults.set([]);
    searchQuery.set('');
  }

  // Comment out debug reactive statement
  // $: console.log('Store Values:', {
  //   isAdmin: $isAdmin,
  //   selectedOrgId: $selectedOrgId,
  //   searchResults: $searchResults,
  //   organizationsStore: $organizationsStore
  // });

  // Add debug logging for search
  async function handleSearch() {
    try {
      // console.log('Search Query:', $searchQuery);
      const results = $organizationsStore.filter(org => 
        org.name.toLowerCase().includes($searchQuery.toLowerCase()) ||
        org.description.toLowerCase().includes($searchQuery.toLowerCase())
      );
      // console.log('Search Results:', results);
      searchResults.set(results);
    } catch (error) {
      console.error('Error searching organizations:', error);
    }
  }

  async function loadOrganizationData() {
    if (!$selectedOrgId) return;
    
    const orgData = $organizationsStore.find(org => org.id === $selectedOrgId);
    if (!orgData) return;
    
    // Populate stores with existing data
    name.set(orgData.name || '');
    contactEmail.set(orgData.contactEmail || '');
    position.set(orgData.position || '');
    orgEmail.set(orgData.orgEmail || '');
    logo.set(orgData.logo || '');
    location.set(orgData.location || { national: false, state: '', city: '' });
    selectedFocusAreas.set(orgData.focusAreas || []);
    selectedEngagementTypes.set(orgData.engagementTypes || []);
    projects.set(orgData.projects || '');
    description.set(orgData.description || '');
    websiteUrl.set(orgData.websiteUrl || '');
    volunteerUrl.set(orgData.volunteerUrl || '');
    joinUrl.set(orgData.joinUrl || '');
    socialMediaLinks.set(orgData.socialMediaLinks || {
      facebook: '',
      twitter: '',
      instagram: '',
      linkedin: '',
      bluesky: '',
      threads: '',
      mastodon: '',
      nostr: ''
    });
    showSocialFeeds.set(orgData.showSocialFeeds || false);
    membersCount.set(orgData.membersCount);
    staffRange.set(orgData.staff?.range || [0, 0]);
    staffDescription.set(orgData.staff?.description || '');
    supporterRange.set(orgData.supporter?.range || [0, 0]);
    supporterDescription.set(orgData.supporter?.description || '');
  }

  async function handleSubmit(event: Event) {
    event.preventDefault();
    
    try {
      const formData: Organization = {
        id: $selectedOrgId,
        name: $name,
        contactEmail: $contactEmail,
        position: $position,
        orgEmail: $orgEmail,
        logo: $logo,
        location: $location,
        focusAreas: $selectedFocusAreas,
        engagementTypes: $selectedEngagementTypes,
        projects: $projects,
        description: $description,
        websiteUrl: $websiteUrl,
        volunteerUrl: $volunteerUrl,
        joinUrl: $joinUrl,
        socialMediaLinks: $socialMediaLinks,
        showSocialFeeds: $showSocialFeeds,
        membersCount: $membersCount,
        staff: {
          range: $staffRange,
          description: $staffDescription
        },
        supporter: {
          range: $supporterRange,
          description: $supporterDescription
        }
      };

      // Update the organization in the store
      organizationsStore.update(orgs => {
        const index = orgs.findIndex(org => org.id === $selectedOrgId);
        if (index !== -1) {
          const updatedOrgs = [...orgs];
          updatedOrgs[index] = { ...updatedOrgs[index], ...formData };
          return updatedOrgs;
        }
        return orgs;
      });

      alert('Organization information updated successfully!');
    } catch (error) {
      console.error('Error updating organization:', error);
      alert('Failed to update organization information. Please try again.');
    }
  }
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-6">Manage Organizations</h1>
  
  <!-- Remove or comment out debug information div
  <div class="bg-yellow-100 p-4 mb-4">
    <p class="font-bold">Debug Information:</p>
    <pre class="whitespace-pre-wrap">
      isAdmin: {$isAdmin}
      Organizations count: {$organizationsStore.length}
      Search results: {$searchResults.length}
      Selected org ID: {$selectedOrgId}
    </pre>
  </div>
  -->

  {#if $isAdmin}
    <div class="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h2 class="text-xl font-semibold mb-4">Search Organizations</h2>
      <div class="flex gap-4">
        <input
          type="text"
          bind:value={$searchQuery}
          placeholder="Search organizations..."
          class="flex-1 px-4 py-2 border border-gray-300 rounded-md"
          on:keydown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSearch();
            }
          }}
        />
        <button
          on:click={handleSearch}
          class="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors"
        >
          Search
        </button>
      </div>

      {#if $searchResults.length > 0 && !$selectedOrgId}
        <div class="mt-4 space-y-2">
          {#each $searchResults as org}
            <button
              on:click={() => selectedOrgId.set(org.id)}
              class="w-full text-left p-3 hover:bg-gray-100 rounded-md transition-colors"
              class:bg-gray-100={$selectedOrgId === org.id}
            >
              {org.name}
            </button>
          {/each}
        </div>
      {/if}
    </div>
  {/if}

  {#if $selectedOrgId || !$isAdmin}
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <h1 class="text-3xl font-bold text-primary mb-6">
        Manage Your Organization Directory Page
      </h1>

      <div class="bg-white shadow-lg rounded-lg p-8">
        <p class="text-gray-600 italic mb-6">Fields marked with * are required</p>

        <form on:submit={handleSubmit} class="space-y-6">
          <!-- Basic Information -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">
              Organization Name *
            </label>
            <input 
              type="text" 
              id="name" 
              bind:value={$name} 
              required 
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <!-- Contact Information -->
          <div>
            <label for="contactEmail" class="block text-sm font-medium text-gray-700">
              Contact Email *
            </label>
            <input 
              type="email" 
              id="contactEmail" 
              bind:value={$contactEmail} 
              required 
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label for="position" class="block text-sm font-medium text-gray-700">
              Position/Role
            </label>
            <input 
              type="text" 
              id="position" 
              bind:value={$position} 
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label for="orgEmail" class="block text-sm font-medium text-gray-700">
              Organization Email
            </label>
            <input 
              type="email" 
              id="orgEmail" 
              bind:value={$orgEmail} 
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <!-- Logo -->
          <div>
            <label for="logo" class="block text-sm font-medium text-gray-700">
              Logo URL
            </label>
            <input 
              type="url" 
              id="logo" 
              bind:value={$logo} 
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <!-- Location -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700">Location</label>
            <div class="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="national" 
                bind:checked={$location.national}
                class="rounded border-gray-300"
              />
              <label for="national">National Organization</label>
            </div>
            <input 
              type="text" 
              placeholder="State" 
              bind:value={$location.state}
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input 
              type="text" 
              placeholder="City" 
              bind:value={$location.city}
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <!-- Focus Areas -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Focus Areas *
            </label>
            <Select
              items={focusAreas}
              bind:value={$selectedFocusAreas}
              isMulti={true}
              placeholder="Select focus areas"
            />
          </div>

          <!-- Engagement Types -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Engagement Types *
            </label>
            <Select
              items={engagementTypes}
              bind:value={$selectedEngagementTypes}
              isMulti={true}
              placeholder="Select engagement types"
            />
          </div>

          <!-- Projects -->
          <div>
            <label for="projects" class="block text-sm font-medium text-gray-700">
              Projects
            </label>
            <textarea 
              id="projects" 
              bind:value={$projects}
              rows="3" 
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <!-- Description -->
          <div>
            <label for="description" class="block text-sm font-medium text-gray-700">
              Description *
            </label>
            <textarea 
              id="description" 
              bind:value={$description}
              required
              rows="5" 
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <!-- URLs -->
          <div>
            <label for="websiteUrl" class="block text-sm font-medium text-gray-700">
              Website URL
            </label>
            <input 
              type="url" 
              id="websiteUrl" 
              bind:value={$websiteUrl}
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label for="volunteerUrl" class="block text-sm font-medium text-gray-700">
              Volunteer URL
            </label>
            <input 
              type="url" 
              id="volunteerUrl" 
              bind:value={$volunteerUrl}
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label for="joinUrl" class="block text-sm font-medium text-gray-700">
              Join URL
            </label>
            <input 
              type="url" 
              id="joinUrl" 
              bind:value={$joinUrl}
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <!-- Social Media Links -->
          <div class="space-y-4">
            <label class="block text-sm font-medium text-gray-700">Social Media Links</label>
            <input 
              type="url" 
              placeholder="Twitter username"
              bind:value={$socialMediaLinks.twitter}
              class="block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input 
              type="url" 
              placeholder="Bluesky handle"
              bind:value={$socialMediaLinks.bluesky}
              class="block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input 
              type="url" 
              placeholder="Mastodon address"
              bind:value={$socialMediaLinks.mastodon}
              class="block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input 
              type="url" 
              placeholder="Nostr (name/npub/nip-05"
              bind:value={$socialMediaLinks.nostr}
              class="block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input 
              type="url" 
              placeholder="Threads username"
              bind:value={$socialMediaLinks.threads}
              class="block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input 
              type="url" 
              placeholder="Instagram username"
              bind:value={$socialMediaLinks.instagram}
              class="block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input 
              type="url" 
              placeholder="Facebook username"
              bind:value={$socialMediaLinks.facebook}
              class="block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input 
              type="url" 
              placeholder="LinkedIn username"
              bind:value={$socialMediaLinks.linkedin}
              class="block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <!-- Show Social Feeds -->
          <div class="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="showSocialFeeds" 
              bind:checked={$showSocialFeeds}
              class="rounded border-gray-300"
            />
            <label for="showSocialFeeds">Show Social Media Feeds</label>
          </div>

          <div class="flex justify-between pt-6">
            <button 
              type="submit" 
              class="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors"
            >
              Update Organization Information
            </button>
            
            <button 
              type="button"
              class="text-red-600 hover:text-red-800"
              on:click={() => {
                if (confirm('Are you sure you want to delete your organization listing?')) {
                  // TODO: Implement delete functionality
                }
              }}
            >
              Delete Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  {/if}

  {#if $isAdmin && !$selectedOrgId}
    <div class="container mx-auto px-4 py-8 max-w-4xl text-center text-gray-600">
      Please search and select an organization to edit.
    </div>
  {/if}
</div>