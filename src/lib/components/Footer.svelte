<script lang="ts">
  import { userNpub, userProfile } from '../stores/authStore';
</script>

<footer class="bg-gray-800 text-white py-4">
  <div class="container mx-auto px-4 flex justify-between items-center">
    <div class="text-sm">
      © 2023 All of US Directory. All rights reserved.
    </div>
    <div class="text-sm">
      {#if $userNpub}
        Logged in as: {$userNpub} | 
        {#if $userProfile}
          <span>Name: {$userProfile.name}</span> | 
          <span>Email: {$userProfile.email}</span> <!-- Example fields -->
        {/if}
        <a href="#" on:click|preventDefault={() => userNpub.set(null)} class="hover:underline">Logout</a>
      {:else}
        <a href="#" on:click|preventDefault={() => loginWithNostr()} class="hover:underline">Login</a>
      {/if}
    </div>
  </div>
</footer> 