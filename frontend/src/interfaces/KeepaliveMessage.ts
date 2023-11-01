interface Metadata {
	message_id: string;
	message_type: string;
	message_timestamp: string;
}

interface Payload {
	payload: object;
}

export interface KeepaliveMessage {
	metadata: Metadata;
	payload: Payload;
}
