import type {
	ChannelPointsRewardEvent,
	RedemptionEvent,
	Redemption
} from '../../types/ChannelPointsReward';
import type { WebSocketMessage } from '../../types/WebSocketMessage';

export const onMessage = (webSocketMessage: WebSocketMessage) => {
	if ('data' in webSocketMessage) {
		const channelPointsRewardEvent: ChannelPointsRewardEvent = webSocketMessage.data;
		const redemptionEvent: RedemptionEvent = JSON.parse(channelPointsRewardEvent.message);
		const redemption: Redemption = redemptionEvent.data.redemption;
		console.log(`${redemption.user.display_name} says ${redemption.user_input}`);
	}
};