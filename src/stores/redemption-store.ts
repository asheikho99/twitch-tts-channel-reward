import { writable, type Writable } from 'svelte/store';

export interface Redemption {
	username: string | undefined;
	userInput: string | undefined;
}

export const RedemptionStore: Writable<Redemption> = writable<Redemption>({} as Redemption);
