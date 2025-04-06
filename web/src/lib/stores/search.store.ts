import { persisted } from 'svelte-persisted-store';
import { writable } from 'svelte/store';

export const savedSearchTerms = persisted<string[]>('search-terms', [], {});
export const isSearchEnabled = writable<boolean>(false);
export const preventRaceConditionSearchBar = writable<boolean>(false);

export const resetSearch = () => {
  savedSearchTerms.set([]);
  isSearchEnabled.set(false);
  preventRaceConditionSearchBar.set(false);
};
