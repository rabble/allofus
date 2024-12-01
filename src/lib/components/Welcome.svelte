<script lang="ts">
  import FeaturedOrganizations from "./FeaturedOrganizations.svelte";
</script>

<div class="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto my-8">
  <h1 class="text-4xl font-bold text-primary mb-6">
    All of US: A Directory To Connect, Care, and Build
  </h1>
  
  <p class="text-lg mb-6">
    Welcome to this site. We are here as a service to you during this very difficult time in our country. 
    If you are worried about how the new Trump administration's policies will affect our communities this is a place for you.
  </p>
  
  <p class="text-lg mb-6">
    All of US provides action pathways for each of us to come together to make our communities, our jobs, 
    and our daily lives better for all of us. No matter why you decided that you want to be part of the 
    efforts to create positive change, you are welcomed to use this site.
  </p>
  
  <div class="grid md:grid-cols-2 gap-6 mt-8">
    <div class="bg-blue-50 p-6 rounded-lg">
      <h2 class="text-xl font-semibold text-primary mb-3">What can I do?</h2>
      <p>Use your skills for positive change and learn new ones.</p>
    </div>
    
    <div class="bg-blue-50 p-6 rounded-lg">
      <h2 class="text-xl font-semibold text-primary mb-3">Where can I turn?</h2>
      <p>Connect with campaigns and organizations that need your help to help your community.</p>
    </div>
  </div>
</div>

<FeaturedOrganizations />