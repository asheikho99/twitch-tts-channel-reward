import { browser } from '$app/environment';
import { onClose } from '../events/websocket/onClose';
import { onError } from '../events/websocket/onError';
import { onMessage } from '../events/websocket/onMessage';
import { onOpen } from '../events/websocket/onOpen';

export const load = async () => {
	let websocket: WebSocket | null = null;

	if (browser) {
		websocket = new WebSocket('ws://127.0.0.1:8080/ws');
		
		onOpen({ websocket });
		onMessage({ websocket });
		onError({ websocket });
		onClose({ websocket });
	}

	return { websocket: websocket };
};
