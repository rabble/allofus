import { writable, derived } from 'svelte/store';
import { searchFilters } from './searchStore';
import { navigate } from 'svelte-routing';

// Parse URL parameters into a store
function createUrlParamsStore() {
  const { subscribe, set } = writable(new URLSearchParams(window.location.search));

  return {
    subscribe,
    set: (params: URLSearchParams) => {
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      navigate(newUrl, { replace: true });
      set(params);
    },
    update: (fn: (params: URLSearchParams) => URLSearchParams) => {
      const params = fn(new URLSearchParams(window.location.search));
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      navigate(newUrl, { replace: true });
      set(params);
    }
  };
}

export const urlParams = createUrlParamsStore();

// Debounce function to limit the frequency of URL updates
function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return function(...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Derived store to sync URL with filters, debounced
export const syncUrlWithFilters = derived(searchFilters, ($searchFilters, set) => {
  const updateUrl = debounce(() => {
    const queryParams = new URLSearchParams();
    if ($searchFilters.location) queryParams.set('location', $searchFilters.location);
    if ($searchFilters.focusArea) queryParams.set('focusArea', $searchFilters.focusArea);
    if ($searchFilters.engagementType) queryParams.set('engagementType', $searchFilters.engagementType);

    history.replaceState(null, '', `?${queryParams.toString()}`);
    set($searchFilters);
  }, 300); // Adjust the debounce delay as needed

  updateUrl();
});

// Initialize search filters from URL parameters
export function initializeFromUrl() {
  const params = new URLSearchParams(window.location.search);
  
  searchFilters.set({
    location: params.get('location') || '',
    focusArea: params.get('focusArea') || '',
    engagementType: params.get('engagementType') || ''
  });
}

// Handle browser back/forward navigation
window.addEventListener('popstate', () => {
  initializeFromUrl();
});