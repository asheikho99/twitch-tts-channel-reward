export const updateCustomRewardStatus = async ({
	id,
	broadcasterId,
	rewardId,
    status,
}: {
	id: string; // redemption id
	broadcasterId: string;
	rewardId: string;
    status: string;
}) => {
	await fetch(
		`https://api.twitch.tv/helix/channel_points/custom_rewards/redemptions?id=${id}&broadcaster_id=${broadcasterId}&reward_id=${rewardId}`,
		{
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_USER_ACCESS_TOKEN}`,
				'Client-Id': import.meta.env.VITE_CLIENT_ID,
				'Content-Type': 'application/json'
			},
			body: `{"status": "${status}"}`,
			method: 'PATCH'
		}
	);
};
