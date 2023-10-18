import type { NotificationMessage } from '../../../interfaces/NotificationMessage';
import { RedemptionStore } from '../../../stores/redemption-store';

export function onNotification(message: NotificationMessage) {
	console.log('notification', message);

	const event = message.payload.event;
	const username = event.user_name;
	const userInput = event.user_input;
	
	RedemptionStore.set({ username: username, userInput: userInput });
}
