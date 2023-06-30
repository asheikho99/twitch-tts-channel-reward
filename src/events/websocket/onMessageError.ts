import type { WebSocketMessageError } from '../../types/WebSocketMessage';

export const onMessageError = (webSocketMessage: WebSocketMessageError) => {
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
