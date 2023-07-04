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
	user_id: string;
	user_login: string;
	user_name: string;
	broadcaster_user_id: string;
	broadcaster_user_login: string;
	broadcaster_user_name: string;
	followed_at: string;
}

export interface NotificationMessage {
	metadata: Metadata;
	payload: Payload;
}
