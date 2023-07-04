import type { NotificationMessage } from '../../../interfaces/NotificationMessage';

export function onNotification(message: NotificationMessage) {
	console.log('notification', message);
}
