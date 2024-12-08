<script lang="ts">
  import { Link } from "svelte-routing";
  import NavLinks from "./navigation/NavLinks.svelte";
  import MailingListSignup from "./shared/MailingListSignup.svelte";
</script>

<header class="bg-primary text-white shadow-lg">
  <nav class="container mx-auto px-4 py-4">
    <div class="flex justify-between items-center">
      <Link to="/" class="flex items-center space-x-3">
        <img src="/logo.png" alt="All of Us Directory Logo" class="h-12 w-auto" />
        <span class="text-2xl font-bold">All of Us Directory</span>
      </Link>
      <NavLinks />
      <MailingListSignup />
    </div>
  </nav>
</header>