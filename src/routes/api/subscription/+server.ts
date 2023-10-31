import { ClientId, UserAccessToken } from '$env/static/private';

export async function POST({ request }) {
	const body = await request.json();

	const res = await fetch('https://api.twitch.tv/helix/eventsub/subscriptions', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${UserAccessToken}`,
			'Client-Id': ClientId,
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
				session_id: body.sessionId
			}
		})
	});

	const data = await res.json();
	return new Response(JSON.stringify(data));
}
