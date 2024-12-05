<script lang="ts">
  import { loginWithNostr } from '../utils/nostrLogin';
  import { userNpub } from '../stores/authStore';
  import { get } from 'svelte/store';
  import * as nip19 from 'nostr-tools/nip19';

  const handleLogin = async () => {
    try {
      const publicKey = await loginWithNostr();
      console.log('Public key received:', publicKey);
      const npub = nip19.npubEncode(publicKey);
      userNpub.set(npub);
      console.log('Logged in with npub:', npub);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    userNpub.set(null);
    localStorage.removeItem('nostrPrivateKey');
    localStorage.removeItem('nostrPublicKey');
    console.log('Logged out');
  };
</script>

{#if $userNpub}
  <button 
    on:click={handleLogout} 
    tabindex="0" 
    aria-label="Logout"
    class="bg-red-500 text-white p-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
  >
    Logout
  </button>
{:else}
  <button 
    on:click={handleLogin} 
    on:keydown={(e) => e.key === 'Enter' && handleLogin()} 
    tabindex="0" 
    aria-label="Login with Nostr"
    class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
  >
    Login
  </button>
{/if}