<script lang="ts">
	// import { getRandomNonce } from '$lib/getRandomNonce';
	// import { onClose } from '../events/websocket/onClose';
	// import { onError } from '../events/websocket/onError';
	// import { onMessage } from '../events/websocket/onMessage';
	// import { onMessageError } from '../events/websocket/onMessageError';
	// import type { WebSocketMessage, WebSocketMessageError } from '../types/WebSocketMessage';

	// let webSocketEstablished = false;
	// let ws: WebSocket | null = null;
	// let audioPlayer: HTMLAudioElement;
	// let audioURL: string;

	// const establishWebSocket = () => {
	// 	if (webSocketEstablished) return;

	// 	ws = new WebSocket('wss://pubsub-edge.twitch.tv');

	// 	ws.addEventListener('open', (event) => {
	// 		webSocketEstablished = true;
	// 		const payload = {
	// 			type: 'LISTEN',
	// 			nonce: getRandomNonce(15),
	// 			data: {
	// 				topics: [`channel-points-channel-v1.${import.meta.env.VITE_CHANNEL_ID}`],
	// 				auth_token: import.meta.env.VITE_ACCESS_TOKEN
	// 			}
	// 		};
	// 		if (ws) ws.send(JSON.stringify(payload));
	// 		console.log('connection open', event);
	// 	});

	// 	ws.addEventListener('message', async (event: MessageEvent<string>) => {
	// 		const webSocketMessage: WebSocketMessage | WebSocketMessageError = JSON.parse(event.data);
	// 		switch (webSocketMessage.type) {
	// 			case 'RESPONSE':
	// 				onMessageError(webSocketMessage as WebSocketMessageError);
	// 				break;
	// 			case 'MESSAGE':
	// 				const userInput = onMessage(webSocketMessage as WebSocketMessage);
	// 				const audioRes = await fetch(
	// 					`https://api.streamelements.com/kappa/v2/speech?voice=Naayf&text=${userInput}`
	// 				)
	// 					.then(async (res) => await res.blob())
	// 					.then((audioBlob) => {
	// 						audioURL = URL.createObjectURL(audioBlob);
	// 						audioPlayer.addEventListener('loadeddata', () => {
	// 							audioPlayer.play();
	// 						});
	// 					});
	// 				break;
	// 			default:
	// 				console.log(webSocketMessage.type);
	// 		}
	// 	});

	// 	ws.addEventListener('close', onClose);
	// 	ws.addEventListener('error', onError);
	// };
</script>

<!-- <button disabled={webSocketEstablished} on:click={() => establishWebSocket()}>
	Establish WebSocket connection
</button>
<audio src={audioURL} bind:this={audioPlayer} /> -->
