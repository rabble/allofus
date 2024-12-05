import { generateSecretKey, getPublicKey } from 'nostr-tools/pure';
import { bytesToHex } from '@noble/hashes/utils';
import { SimplePool } from 'nostr-tools/pool';
import { userProfile } from '../stores/authStore';
import * as nip19 from 'nostr-tools/nip19';

const relays = [
  'wss://relay.damus.io',
  'wss://relay.nos.social', // Add more relays as needed
];

export const loginWithNostr = async () => {
  // Generate a new secret key (Uint8Array)
  const privateKey = generateSecretKey();
  
  // Derive the public key (hex string) from the secret key
  const publicKey = getPublicKey(privateKey);

  // Convert the private key to a hex string for storage
  const privateKeyHex = bytesToHex(privateKey);
  console.log('Private key (hex):', privateKeyHex);

  // Convert the public key to npub format
  const npub = nip19.npubEncode(publicKey);
  console.log('Public key (npub):', npub);

  // Ensure the public key is in hex format
  let publicKeyHex = publicKey;
  try {
    const decoded = nip19.decode(npub);
    if (decoded.type === 'npub') {
      publicKeyHex = decoded.data;
    }
  } catch (error) {
    console.error('Failed to decode npub:', error);
    return;
  }
  console.log('Public key (hex):', publicKeyHex);

  // Store keys in local storage
  localStorage.setItem('nostrPrivateKey', privateKeyHex);
  localStorage.setItem('nostrPublicKey', publicKeyHex);
  localStorage.setItem('nostrNpub', npub);

  // Update authStore with both npub and public key in hex format
  userProfile.set({ npub, publicKeyHex });

  // Connect to relays and query the user's profile
  try {
    const pool = new SimplePool();

    // Log the relays to ensure they are correct
    console.log('Connecting to relays:', relays);

    // Log the public key to verify its format
    console.log('Using public key:', publicKeyHex);

    const profile = await pool.querySync(relays, { authors: [publicKeyHex] });

    if (profile.length > 0) {
      userProfile.set(profile[0]);
      console.log('User profile:', profile[0]);
    } else {
      console.log('No profile found for public key:', publicKeyHex);
    }
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
    // Additional error details can be logged here
  }

  // Return the public key for further use
  return publicKeyHex;
}; 