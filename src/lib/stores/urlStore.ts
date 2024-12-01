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

// Sync URL parameters with search filters
export const syncUrlWithFilters = derived(
  searchFilters,
  ($searchFilters, set) => {
    const params = new URLSearchParams();
    
    if ($searchFilters.location) {
      params.set('location', $searchFilters.location);
    }
    if ($searchFilters.focusArea) {
      params.set('focusArea', $searchFilters.focusArea);
    }
    if ($searchFilters.engagementType) {
      params.set('engagementType', $searchFilters.engagementType);
    }
    
    urlParams.set(params);
  }
);

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