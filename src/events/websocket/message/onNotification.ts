import type { NotificationMessage } from '../../../interfaces/NotificationMessage';
import { userStore } from '../../../stores/userStore';

export function onNotification(message: NotificationMessage) {
	console.log('notification', message);

	const event = message.payload.event;
	const username = event.user_name;
	const userInput = event.user_input;

	userStore.set({ username: username, userInput: userInput });
}
