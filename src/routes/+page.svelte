<script lang="ts">
	import { randomNonce } from '$lib/random-nonce';
	
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

		ws.addEventListener('message', (event) => {
			console.log('message', event);
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
