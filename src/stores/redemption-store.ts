import { writable, type Writable } from 'svelte/store';

export interface Redemption {
	username: string;
	userInput: string;
}

export const RedemptionStore: Writable<Redemption> = writable<Redemption>({} as Redemption);
