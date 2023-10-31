import { websocketStore } from '../stores/websocket-store';
export const ssr = false;

export const load = async () => {
	websocketStore.createConnection();
};
