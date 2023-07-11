interface Metadata {
	message_id: string;
	message_type: string;
	message_timestamp: string;
	subscription_type: string;
	subscription_version: string;
}

interface Payload {
	subscription: Subscription;
	event: Event;
}

interface Subscription {
	id: string;
	status: string;
	type: string;
	version: string;
	cost: number;
	condition: Condition;
	transport: Transport;
	created_at: string;
}

interface Condition {
	broadcaster_user_id: string;
}

interface Transport {
	method: string;
	session_id: string;
}

interface Event {
	id: string
	broadcaster_user_id: string;
	broadcaster_user_login: string;
	broadcaster_user_name: string;
	user_id: string;
	user_login: string;
	user_name: string;
	user_input: string
	status: string
	reward: Reward
	redeemed_at: string
}

export interface Reward {
	id: string
	title: string
	cost: number
	prompt: string
}

export interface NotificationMessage {
	metadata: Metadata;
	payload: Payload;
}
