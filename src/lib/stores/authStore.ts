import { writable } from 'svelte/store';

export const userNpub = writable<string | null>(null);
export const userProfile = writable<any | null>(null);

