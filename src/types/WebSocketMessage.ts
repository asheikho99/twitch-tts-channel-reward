import type { ChannelPointsRewardEvent } from "./ChannelPointsReward";

export type WebSocketMessage = {
	type: string;
	data: ChannelPointsRewardEvent;
};
