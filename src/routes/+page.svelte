<script lang="ts">
	import { randomNonce } from '$lib/random-nonce';
	import type {
		ChannelPointsRewardEvent,
		Redemption,
		RedemptionEvent
	} from '../types/ChannelPointsReward';
	import type { WebSocketMessage } from '../types/WebSocketMessage';

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
			const wsMessage: WebSocketMessage = JSON.parse(event.data);

			switch (wsMessage.type) {
				case 'RESPONSE':
					return;
				case 'MESSAGE':
					const channelPointsRewardEvent: ChannelPointsRewardEvent = wsMessage.data;
					const redemptionEvent: RedemptionEvent = JSON.parse(channelPointsRewardEvent.message);
					const redemption: Redemption = redemptionEvent.data.redemption;
					console.log(`${redemption.user.display_name} says ${redemption.user_input}`);
					break;
				default:
					console.log('');
			}
		});

		ws.addEventListener('close', (event) => {
			console.log('connection closed', event);
		});

		ws.addEventListener('error', (event) => {
			console.error('WebSocket error', event);
		});
	};
</script>

<button disabled={webSocketEstablished} on:click={() => establishWebSocket()}>
	Establish WebSocket connection
</button>
