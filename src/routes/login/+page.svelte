<script lang="ts">
  import { navigate } from "svelte-routing";
  import { checkNostrAuth } from '$lib/utils/auth';
  import { isAuthenticated } from '$lib/stores/authStore';

  let error = '';
  let loading = false;

  const handleNostrLogin = async () => {
    loading = true;
    error = '';
    try {
      const authenticated = await checkNostrAuth();
      if (authenticated) {
        navigate('/admin/dashboard');
      } else {
        error = 'Nostr authentication failed. Make sure you have a Nostr extension installed.';
      }
    } catch (e) {
      error = 'An error occurred during authentication';
    } finally {
      loading = false;
    }
  };
</script>

<div class="flex items-center justify-center py-6 px-4">
  <div class="w-full max-w-sm">
    <h2 class="text-2xl font-bold text-gray-900 mb-4 text-center">
      Sign in with Nostr
    </h2>
    
    {#if error}
      <div class="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded text-sm mb-4" role="alert">
        <span>{error}</span>
      </div>
    {/if}

    <button
      on:click={handleNostrLogin}
      disabled={loading}
      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      {#if loading}
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      {:else}
        Connect with Nostr
      {/if}
    </button>
  </div>
</div>
