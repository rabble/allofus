<script lang="ts">
  import { page } from "$app/stores";
  import NavLinks from "./navigation/NavLinks.svelte";
</script>

<header class="bg-primary text-white shadow-lg">
  <nav class="container mx-auto px-4 py-4">
    <div class="flex justify-between items-center">
      <a href="/" class="flex items-center space-x-3">
        <img src="/logo.png" alt="All of Us Directory Logo" class="h-12 w-auto" />
        <span class="text-2xl font-bold">All of Us Directory</span>
      </a>
      <NavLinks />
      <a 
        href="/join" 
        class="bg-secondary hover:bg-white hover:text-primary text-white px-6 py-2 rounded-md transition-colors font-bold"
      >
        Join
      </a>
    </div>
  </nav>
</header>
