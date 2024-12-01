import { writable } from 'svelte/store';

export const currentRoute = writable(window.location.pathname);

// Update route store when navigation occurs
window.addEventListener('popstate', () => {
  currentRoute.set(window.location.pathname);
});