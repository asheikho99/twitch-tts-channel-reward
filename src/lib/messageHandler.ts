import type {
	ChannelPointsRewardEvent,
	RedemptionEvent,
	Redemption
} from '../types/ChannelPointsReward';
import type { WebSocketMessage, WebSocketMessageError } from '../types/WebSocketMessage';

export const handleResponse = (webSocketMessage: WebSocketMessage | WebSocketMessageError) => {
	if ('error' in webSocketMessage) {
		switch (webSocketMessage.error) {
			case 'ERR_BADMESSAGE':
				break;
			case 'ERR_BADAUTH':
				break;
			case 'ERR_SERVER':
				break;
			case 'ERR_BADTOPIC':
				break;
			default:
				console.log(webSocketMessage.error);
		}
	}
};

export const handleMessage = (webSocketMessage: WebSocketMessage) => {
	if ('data' in webSocketMessage) {
		const channelPointsRewardEvent: ChannelPointsRewardEvent = webSocketMessage.data;
		const redemptionEvent: RedemptionEvent = JSON.parse(channelPointsRewardEvent.message);
		const redemption: Redemption = redemptionEvent.data.redemption;
		console.log(`${redemption.user.display_name} says ${redemption.user_input}`);
	}
};
