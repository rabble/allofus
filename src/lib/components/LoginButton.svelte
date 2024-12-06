<!--
<script lang="ts">
  import { addSession, dropSession, getSession } from '@welshman/app';
  import { Nip01Signer, makeSecret } from '@welshman/signer';
  import { writable } from 'svelte/store';
  import { nip19 } from 'nostr-tools';

  const userNpub = writable<string | null>(null);

  const handleLogin = async () => {
    try {
      const secret = makeSecret();
      const signer = new Nip01Signer(secret);
      const publicKey = await signer.getPubkey();
      const npub = nip19.npubEncode(publicKey);

      console.log('Private key (hex):', secret);
      console.log('Public key (npub):', npub);

      localStorage.setItem('nostrPrivateKey', secret);
      localStorage.setItem('nostrPublicKey', publicKey);
      localStorage.setItem('nostrNpub', npub);

      addSession({
        method: 'nip07',
        pubkey: publicKey
      });

      userNpub.set(npub);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
</script>

<button class="bg-blue-500 text-white p-2 rounded" on:click={handleLogin}>
  Login
</button>
-->