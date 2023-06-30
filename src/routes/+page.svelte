<script lang="ts">
	import { randomNonce } from '$lib/random-nonce';
	import { onClose } from '../events/websocket/onClose';
	import { onError } from '../events/websocket/onError';
	import { onMessage } from '../events/websocket/onMessage';
	import { onMessageError } from '../events/websocket/onMessageError';
	import type { WebSocketMessage, WebSocketMessageError } from '../types/WebSocketMessage';

	let webSocketEstablished = false;
	let ws: WebSocket | null = null;

	const establishWebSocket = () => {
		if (webSocketEstablished) return;

		ws = new WebSocket('wss://pubsub-edge.twitch.tv');

		ws.addEventListener('open', (event) => {
			webSocketEstablished = true;
			const payload = {
				type: 'LISTEN',
				nonce: randomNonce(15),
				data: {
					topics: [`channel-points-channel-v1.${import.meta.env.VITE_CHANNEL_ID}`],
					auth_token: import.meta.env.VITE_ACCESS_TOKEN
				}
			};
			if (ws) ws.send(JSON.stringify(payload));
			console.log('connection open', event);
		});

		ws.addEventListener('message', (event: MessageEvent<string>) => {
			const webSocketMessage: WebSocketMessage | WebSocketMessageError = JSON.parse(event.data);

			switch (webSocketMessage.type) {
				case 'RESPONSE':
					onMessageError(webSocketMessage as WebSocketMessageError);
					break;
				case 'MESSAGE':
					onMessage(webSocketMessage as WebSocketMessage);
					break;
				default:
					console.log(webSocketMessage.type);
			}
		});

		ws.addEventListener('close', onClose);
		ws.addEventListener('error', onError);
	};
</script>

<button disabled={webSocketEstablished} on:click={() => establishWebSocket()}>
	Establish WebSocket connection
</button>
