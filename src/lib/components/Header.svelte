<script lang="ts">
  import { Link } from "svelte-routing";
  import NavLinks from "./navigation/NavLinks.svelte";
</script>

<header class="bg-primary text-white shadow-lg">
  <nav class="container mx-auto px-4 py-4">
    <div class="flex justify-between items-center">
      <Link to="/" class="flex items-center space-x-3">
        <img src="/logo.png" alt="All of US Directory Logo" class="h-12 w-auto" />
        <span class="text-2xl font-bold">All of US Directory</span>
      </Link>
      <NavLinks />
      <a 
        href="https://your-mailerlite-signup-form-link.com" 
        class="hover:underline"
        aria-label="Sign up for our mailing list"
        tabindex="0"
      >
        Join Our Mailing List
      </a>
    </div>
  </nav>
</header>