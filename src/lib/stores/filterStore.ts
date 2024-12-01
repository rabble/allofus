import { writable } from 'svelte/store';
import type { FocusAreaContent } from '../data/focusAreaContent';
import { focusAreaContents } from '../data/focusAreaContent';

export const currentFocusArea = writable<FocusAreaContent | null>(null);
export const currentEngagementType = writable<string | null>(null);

export function setCurrentFocusArea(id: string) {
  const area = focusAreaContents.find(area => area.id === id);
  currentFocusArea.set(area || null);
}

export function setCurrentEngagementType(type: string) {
  currentEngagementType.set(type);
}