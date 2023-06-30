import type { ChannelPointsRewardEvent } from './ChannelPointsReward';

export type WebSocketMessage = {
	type: string;
	data: ChannelPointsRewardEvent;
};

export type WebSocketMessageError = {
	type: string;
	error: string;
	nonce: string;
};