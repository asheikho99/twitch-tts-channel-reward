interface Metadata {
	message_id: string;
	message_type: string;
	message_timestamp: string;
}

interface Session {
	id: string;
	status: string;
	connected_at: string;
	keepalive_timeout_seconds: number;
	reconnect_url: null;
}

interface Payload {
	session: Session;
}

export interface WelcomeMessage {
	metadata: Metadata;
	payload: Payload;
}
