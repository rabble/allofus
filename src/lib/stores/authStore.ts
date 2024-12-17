import { writable } from 'svelte/store';

export const nostrPublicKey = writable<string | null>(null);
export const isAuthenticated = writable(false);

