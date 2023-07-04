import { onNotification } from './message/onNotification';
import { onReconnectMessage } from './message/onReconnectMessage';
import { onRevocation } from './message/onRevocation';
import { onSessionKeepalive } from './message/onSessionKeepalive';
import { onSessionWelcome } from './message/onSessionWelcome';

export function onMessage({ websocket }: { websocket: WebSocket }) {
	websocket.addEventListener('message', async (event: MessageEvent<string>) => {
		try {
			const message = JSON.parse(event.data);
			const messageType = message.metadata.message_type;

			switch (messageType) {
				case 'session_welcome':
					onSessionWelcome(message);
					break;
				case 'notification':
					onNotification(message);
					break;
				case 'session_keepalive':
					onSessionKeepalive(message);
					break;
				case 'reconnect':
					onReconnectMessage(message);
					break;
				case 'revocation':
					onRevocation(message);
					break;
				default:
					console.log('Unknown message type', message);
			}
		} catch (error) {
			console.error('Failed to parse message', error);
		}
	});
}
