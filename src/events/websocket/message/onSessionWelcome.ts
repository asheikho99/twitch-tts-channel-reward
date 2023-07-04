import type { WelcomeMessage } from '../../../interfaces/WelcomeMessage';

export function onSessionWelcome(message: WelcomeMessage) {
	console.log('session_welcome', message);
}
