<script lang="ts">
  import { Link } from "svelte-routing";
  import Logo from "./Logo.svelte";
  import NavLinks from "./navigation/NavLinks.svelte";
</script>

<header class="bg-primary text-white shadow-lg">
  <nav class="container mx-auto px-4 py-4">
    <div class="flex justify-between items-center">
      <Link to="/" class="flex items-center space-x-3">
        <Logo />
        <span class="text-2xl font-bold">All of US Directory</span>
      </Link>
      <NavLinks />
    </div>
  </nav>
</header>