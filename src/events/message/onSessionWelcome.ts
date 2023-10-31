import type { WelcomeMessage } from '../../interfaces/WelcomeMessage';

export async function onSessionWelcome(message: WelcomeMessage) {
	try {
		console.log('session_welcome', message);
		const res = await fetch('/api/subscription', {
			method: 'POST',
			body: JSON.stringify({
				sessionId: message.payload.session.id
			})
		});

		if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

		const data = await res.json();
		if (data.status == 401) throw new Error(JSON.stringify(data));

		return data;
	} catch (error) {
		console.error(error);
	}
}

// async function createSubscription(sessionId: string) {
// 	try {
// 		const subscriptionRes = await fetch('https://api.twitch.tv/helix/eventsub/subscriptions', {
// 			method: 'POST',
// 			headers: {
// 				Authorization: `Bearer ${import.meta.env.VITE_USER_ACCESS_TOKEN}`,
// 				'Client-Id': import.meta.env.VITE_CLIENT_ID,
// 				'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify({
// 				type: 'channel.channel_points_custom_reward_redemption.add',
// 				version: '1',
// 				condition: {
// 					broadcaster_user_id: import.meta.env.VITE_CHANNEL_ID
// 				},
// 				transport: {
// 					method: 'websocket',
// 					session_id: sessionId
// 				}
// 			})
// 		});
// 		if (!subscriptionRes.ok)
// 			throw new Error(
// 				`${subscriptionRes.status} ${subscriptionRes.statusText} - Failed to create event subscription`
// 			);
// 		return subscriptionRes;
// 	} catch (error) {
// 		console.error(error);
// 	}
// }
