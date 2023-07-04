export const onOpen = ({ websocket }: { websocket: WebSocket }) => {
	websocket.addEventListener('open', (event) => {
		console.log(event);
	});
};
