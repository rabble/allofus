<script lang="ts">
  import { Link } from "svelte-routing";
  
  let orgName = '';
  let location = '';
  let contactEmail = '';
  let position = '';
  let orgEmail = '';
  let projects = '';
  let description = '';
  let website = '';

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted');
  };
</script>

<div class="container mx-auto px-4 py-8 max-w-4xl">
  <h1 class="text-4xl font-bold text-primary mb-6">
    My Organization Is Interested in Joining
  </h1>

  <div class="bg-white shadow-lg rounded-lg p-8 mb-8">
    <h2 class="text-2xl font-bold text-primary mb-4">Does Your Organization Align with and want to be included in the All of Us directory?</h2>
    <p class="text-lg mb-6">We welcome groups to join our directory if you meet these criteria:</p>

    <ul class="list-disc list-inside space-y-2 mb-8 text-gray-700">
      <li>Your organization is active in the U.S.</li>
      <li>Your organization is able to welcome and orient desired new members and/or volunteers.</li>
      <li>Your organization takes a progressive, liberatory approach to the issues it focuses on.</li>
      <li>Your organization is non-Commercial, i.e., does it not prioritize profit-making over its core values.</li>
      <li>Your organization avoids divisive sectarianism and ideological purity tests.</li>
      <li>Your organization values mutual support and collective action.</li>
    </ul>

    <p class="text-sm text-gray-500 italic mb-8">
      Subtext: All sects, whiners, complainers, no good counterproductive my-way-or-the-highway types – steer clear.
    </p>

    <p class="text-gray-700 mb-8">
      If your organization complies with the six conditions noted above, and you wish to be in the All of Us directory, please fill out the form below. In a few days we will reply. If all goes well, we will send an ID and PW you can use to access a second form whose contents, once you complete and submit it, will automatically compose a unique page for your organization in the All of Us Directory.
    </p>

    <p class="mb-8">
      Have questions? <Link to="/contact" class="text-blue-600 hover:underline">Contact us</Link>. Otherwise please fill out the preliminary form below:
    </p>

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

      <button type="submit" class="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors">
        Submit Application
      </button>
    </form>
  </div>
</div> 