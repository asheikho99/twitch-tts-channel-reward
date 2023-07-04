export const onMessage = ({ websocket }: { websocket: WebSocket }) => {
	websocket.addEventListener('message', async (event: MessageEvent<string>) => {
		console.log(event);
	});
};
