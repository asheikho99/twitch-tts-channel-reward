interface Metadata {
	message_id: string;
	message_type: string;
	message_timestamp: string;
	subscription_type: string;
	subscription_version: string;
}

interface Payload {
	subscription: Subscription;
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

export interface RevocationMessage {
	metadata: Metadata;
	Payload: Payload;
}
