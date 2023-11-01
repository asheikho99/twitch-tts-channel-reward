import { writable, type Writable } from 'svelte/store';

export interface Redemption {
	id: string;
	rewardId: string;
	broadcasterId: string
	username: string;
	userInput: string;
}

export const RedemptionStore: Writable<Redemption> = writable<Redemption>({} as Redemption);
