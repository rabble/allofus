import { writable } from 'svelte/store';
import type { FocusAreaContent } from '../data/focusAreaContent';
import { focusAreaContents } from '../data/focusAreaContent';

export const currentFocusArea = writable<FocusAreaContent | null>(null);
export const currentEngagementType = writable<string | null>(null);

export function setCurrentFocusArea(id: string) {
  const sortedFocusAreaContents = [...focusAreaContents].sort((a, b) => {
    const titleA = a.title || '';
    const titleB = b.title || '';
    return titleA.localeCompare(titleB);
  });
  
  const area = sortedFocusAreaContents.find(area => area.id === id);
  currentFocusArea.set(area || null);
}

export function setCurrentEngagementType(type: string) {
  currentEngagementType.set(type);
}