import type { NotificationMessage } from '../../interfaces/NotificationMessage';
import { RedemptionStore } from '../../stores/redemption-store';

export function onNotification(message: NotificationMessage) {
	console.log('notification', message);

	const event = message.payload.event;
	const reward = message.payload.event.reward;
	const username = event.user_name;
	const userInput = event.user_input;
	RedemptionStore.set({
		id: event.id,
		rewardId: reward.id,
		broadcasterId: event.broadcaster_user_id,
		username: username,
		userInput: userInput
	});
}
