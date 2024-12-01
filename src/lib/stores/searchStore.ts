import { writable } from 'svelte/store';

export interface SearchFilters {
  location: string;
  focusArea: string;
  engagementType: string;
}

function createSearchFilters() {
  const { subscribe, set, update } = writable<SearchFilters>({
    location: '',
    focusArea: '',
    engagementType: ''
  });

  return {
    subscribe,
    set,
    update,
    reset: () => set({ location: '', focusArea: '', engagementType: '' })
  };
}

export const searchFilters = createSearchFilters();

// Initialize from URL if parameters exist
const params = new URLSearchParams(window.location.search);
if (params.has('location') || params.has('focusArea') || params.has('engagementType')) {
  searchFilters.set({
    location: params.get('location') || '',
    focusArea: params.get('focusArea') || '',
    engagementType: params.get('engagementType') || ''
  });
}