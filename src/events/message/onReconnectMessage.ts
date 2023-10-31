import type { ReconnectMessage } from '../../interfaces/ReconnectMessage';

export function onReconnectMessage(message: ReconnectMessage) {
	console.log('reconnect', message);
}
