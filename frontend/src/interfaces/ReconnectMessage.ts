interface Metadata {
	message_id: string;
	messsage_type: string;
	message_timestamp: string;
}

interface Payload {
	session: Session;
}

interface Session {
	id: string;
	status: string;
	keepalive_timeout_seconds: null;
	reconnect_url: string;
	connected_at: string;
}

export interface ReconnectMessage {
	metadata: Metadata;
	payload: Payload;
}
