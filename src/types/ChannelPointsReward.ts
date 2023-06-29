export type ChannelPointsRewardEvent = {
	topic: string;
	message: string;
};

export type RedemptionEvent = {
	type: string;
	data: RedemptionEventData;
};

export type RedemptionEventData = {
	timestamp: string;
	redemption: Redemption;
};

export type Redemption = {
	id: string;
	user: User;
	channel_id: string;
	redeemed_at: string;
	reward: Reward;
	user_input: string;
	status: 'UNFULFILLED' | 'FULFILLED';
};

export type User = {
	id: string;
	login: string;
	display_name: string;
};

export type Reward = {
	id: string;
	channel_id: string;
	title: string;
	prompt: string;
	cost: number;
	is_user_input_required: boolean;
	is_sub_only: boolean;
	image: RewardImage;
	default_image: RewardImage;
	background_color: string;
	is_enabled: boolean;
	is_paused: boolean;
	is_in_stock: boolean;
	max_per_stream: MaxPerStream;
	should_redemptions_skip_request_queue: boolean;
};

export type RewardImage = {
	url_1x: string;
	url_2x: string;
	url_4x: string;
};

export type MaxPerStream = {
	is_enabled: boolean;
	max_per_stream: number;
};
