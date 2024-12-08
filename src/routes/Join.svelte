<script lang="ts">
  import { Link } from "svelte-routing";
</script>

<div class="container mx-auto px-4 py-8 max-w-4xl">
  <h1 class="text-4xl font-bold text-primary mb-8">Join All of Us</h1>

  <div class="grid md:grid-cols-2 gap-8">
    <!-- Organization Directory Card -->
    <div class="bg-white shadow-lg rounded-lg p-8">
      <h2 class="text-2xl font-bold text-primary mb-4">Apply to Add Your Organization</h2>
      <p class="text-gray-700 mb-6">
        Is your organization working to make positive change? Join our directory to connect with volunteers and supporters who share your mission.
      </p>
      <Link 
        to="/join-directory" 
        class="inline-block bg-secondary hover:bg-primary text-white px-6 py-3 rounded-md transition-colors"
      >
        Propose Organization for the Directory
      </Link>
    </div>

    <!-- Mailing List Card -->
    <div class="bg-white shadow-lg rounded-lg p-8">
      <h2 class="text-2xl font-bold text-primary mb-4">Join Our Community Updates</h2>
      <p class="text-gray-700 mb-6">
        Want to stay informed about All of Us? Join our mailing list to receive updates about new organizations in our directory and ways you can support positive change in your community.
      </p>
      <Link 
        to="/mailing-list" 
        class="inline-block bg-secondary hover:bg-primary text-white px-6 py-3 rounded-md transition-colors"
      >
        Get Community Updates
      </Link>
    </div>
  </div>
</div> 