import type {
	ChannelPointsRewardEvent,
	RedemptionEvent,
	Redemption
} from '../../types/ChannelPointsReward';
import type { WebSocketMessage } from '../../types/WebSocketMessage';

export const onMessage = (webSocketMessage: WebSocketMessage): string | null => {
	if ('data' in webSocketMessage) {
		const channelPointsRewardEvent: ChannelPointsRewardEvent = webSocketMessage.data;
		const redemptionEvent: RedemptionEvent = JSON.parse(channelPointsRewardEvent.message);
		const redemption: Redemption = redemptionEvent.data.redemption;
		return redemption.user_input;
	}
	return null;
};
