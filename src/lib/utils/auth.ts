import { getPublicKey, nip19 } from 'nostr-tools';
import { nostrPublicKey, isAuthenticated } from '../stores/authStore';

export const checkNostrAuth = async (): Promise<boolean> => {
  try {
    // @ts-ignore
    if (!window.nostr) {
      return false;
    }
    
    // @ts-ignore
    const pubkey = await window.nostr.getPublicKey();
    if (pubkey) {
      nostrPublicKey.set(pubkey);
      isAuthenticated.set(true);
      return true;
    }
    return false;
  } catch (e) {
    console.error('Nostr auth check failed:', e);
    return false;
  }
};
