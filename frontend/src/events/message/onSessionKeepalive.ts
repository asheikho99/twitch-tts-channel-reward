import type { KeepaliveMessage } from "../../interfaces/KeepaliveMessage";

export function onSessionKeepalive(message: KeepaliveMessage) {
    console.log('session_keepalive', message);
}