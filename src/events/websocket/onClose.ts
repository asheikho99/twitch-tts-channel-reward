export const onClose = ({ websocket }: { websocket: WebSocket }) => {
	websocket.addEventListener('close', (event: CloseEvent) => {
		console.log(event);
	});
};
