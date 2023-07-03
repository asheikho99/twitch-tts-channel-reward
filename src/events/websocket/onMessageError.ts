import type { WebSocketMessageError } from '../../types/WebSocketMessage';

export const onMessageError = (webSocketMessage: WebSocketMessageError) => {
	if ('error' in webSocketMessage && webSocketMessage.error != '') {
		console.error(webSocketMessage.error);
	}
};
