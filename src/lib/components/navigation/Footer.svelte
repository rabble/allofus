<script lang="ts">
  import { userNpub } from '../../stores/authStore';
  import LoginButton from '../LoginButton.svelte';
</script>

<footer class="bg-gray-800 text-white py-4">
  <div class="container mx-auto px-4 flex justify-between items-center">
    <div class="text-sm">
      © 2024 All of US Directory. All rights reserved.
    </div>
    <div class="text-sm">
      {#if $userNpub}
        Logged in as: {$userNpub} | <a href="#" on:click|preventDefault={() => userNpub.set(null)} class="hover:underline">Logout</a>
      {:else}
      <LoginButton />
      {/if}
    </div>
  </div>
</footer>