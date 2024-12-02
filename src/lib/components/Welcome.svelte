<script lang="ts">
  import FeaturedOrganizations from "./FeaturedOrganizations.svelte";
</script>

<div class="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto my-8">
  <h1 class="text-4xl font-bold text-primary mb-6">
    All of US: A Directory To Connect, Care, and Build
  </h1>
  Contact campaigns and organizations that need your help to help everyone.

  <p class="text-lg mb-6">
    <b>All of US</b> wants to help you find and join efforts to make neighborhoods, schools, jobs, and daily lives better. Use the search below to find and work with organizations on a wide range of issues throughout the country. Enter your information and find ways to help people in need, stop evictions, stop deportations, win higher wages and greater respect on the job, work for racial and gender justice, bring healthcare and reproductive rights to all, protect our environment, achieve climate justice, win electoral reforms, and “Stop Trump” plus more opportunities for organizing together.
  </p>
  
  <h2 class="text-2xl font-bold text-primary mb-6">Search Our Directory of Organizations</h2>
  <p class="text-lg mb-6">
    Choose your location, your focus area, and the way you want to engage, and then click Search to see a list of organizations that fit your criteria. Each entry you see links to an organization page where you will learn more about the organization and projects they have and the help they need. Follow the instructions on that page for how to connect with the organization. You can search as many times as you like to find ways to aid the tasks we all face. 
  </p>
  
  <div class="grid md:grid-cols-2 gap-6 mt-8">
    <div class="bg-blue-50 p-6 rounded-lg">
      <h2 class="text-xl font-semibold text-primary mb-3">What can I do?</h2>
      <p>Use your skills for positive change and learn new ones.</p>
    </div>
    
    <a href="/topics" class="bg-blue-50 p-6 rounded-lg block text-primary hover:bg-blue-100">
      <h2 class="text-xl font-semibold text-primary mb-3">Where can I turn?</h2>
      <p>Connect with campaigns and organizations that need your help to help your community.</p>
    </a>
  </div>
</div>

<FeaturedOrganizations />