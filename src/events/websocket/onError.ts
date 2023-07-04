export const onError = ({ websocket }: { websocket: WebSocket }) => {
	websocket.addEventListener('error', (event: Event) => {
		console.error(event);
	});
};
