import { browser } from '$app/environment';
import { onClose } from '../events/websocket/onClose';
import { onError } from '../events/websocket/onError';
import { onMessage } from '../events/websocket/onMessage';
import { onOpen } from '../events/websocket/onOpen';

export const ssr = false;

export const load = async () => {
	let websocket: WebSocket | null = null;

	try {
		if (browser) {
			websocket = new WebSocket('wss://eventsub.wss.twitch.tv/ws');

			onOpen({ websocket });
			onMessage({ websocket });
			onError({ websocket });
			onClose({ websocket });
		}
	} catch (error) {
		console.error('Error loading WebSocket: ', error);
	}

	return { websocket: websocket };
};
