import { writable, get } from 'svelte/store';
import { onSessionWelcome } from '../events/message/onSessionWelcome';
import { onNotification } from '../events/message/onNotification';
import { onSessionKeepalive } from '../events/message/onSessionKeepalive';
import { onReconnectMessage } from '../events/message/onReconnectMessage';
import { onRevocation } from '../events/message/onRevocation';

interface WebsocketStore {
	websocket: WebSocket | undefined;
}

function createStore() {
	const { set, subscribe } = writable<WebsocketStore>({
		websocket: undefined
	});

	function createConnection() {
		const ws = new WebSocket('wss://eventsub.wss.twitch.tv/ws');
		set({ websocket: ws });

		ws.onopen = (event) => {
			console.log('WebSocket is open now.', event);
		};

		ws.onmessage = (event) => {
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
		};

		ws.onerror = (error) => {
			console.error('WebSocket encountered error: ', error);
			// Handle any error that occurred while creating the WebSocket connection
		};

		ws.onclose = (event) => {
			console.log('WebSocket is closed now.', event);
		};
	}

	function closeConnection() {
		get(websocketStore).websocket?.close();
	}

	return {
		subscribe,
		createConnection,
		closeConnection
	};
}

export const websocketStore = createStore();
