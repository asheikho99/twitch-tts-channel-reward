import type { RevocationMessage } from '../../interfaces/RevocationMessage';

export function onRevocation(message: RevocationMessage) {
	console.log('revocation', message);
}
