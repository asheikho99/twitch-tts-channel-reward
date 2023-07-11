import type { WelcomeMessage } from '../../../interfaces/WelcomeMessage';

export async function onSessionWelcome(message: WelcomeMessage) {
	try {
		console.log('session_welcome', message);
		const sessionId = message.payload.session.id;
		const subscription = await createSubscription(sessionId);
		if (!subscription?.ok) throw new Error(`${subscription?.statusText} ${subscription?.status}`);
		console.log(subscription);
	} catch (error) {
		console.error(error);
	}
}

async function createSubscription(sessionId: string) {
	try {
		const subscriptionRes = await fetch('https://api.twitch.tv/helix/eventsub/subscriptions', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_USER_ACCESS_TOKEN}`,
				'Client-Id': import.meta.env.VITE_CLIENT_ID,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				type: 'channel.channel_points_custom_reward_redemption.add',
				version: '1',
				condition: {
					broadcaster_user_id: import.meta.env.VITE_CHANNEL_ID
				},
				transport: {
					method: 'websocket',
					session_id: sessionId
				}
			})
		});

		if (!subscriptionRes.ok)
			throw new Error(
				`${subscriptionRes.status} ${subscriptionRes.statusText} - Failed to create event subscription`
			);

		return subscriptionRes;
	} catch (error) {
		console.error(error);
	}
}
