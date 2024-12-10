import { writable } from 'svelte/store';

export const user = writable<{
  username: string;
  role: string;
} | null>(null);

export const isAuthenticated = writable(false);

