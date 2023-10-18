import { writable, type Writable } from 'svelte/store';

interface AudioStore {
	URL: string | undefined;
}

export const AudioStore: Writable<AudioStore> = writable<AudioStore>({} as AudioStore);