import { AudioStore } from '../stores/audio-store';
import { RedemptionStore } from '../stores/redemption-store';

let userInput: string;

export async function generateTTS() {
	RedemptionStore.subscribe((values) => (userInput = values.userInput));
	return await fetch(
		`https://api.streamelements.com/kappa/v2/speech?voice=ar-XA-Wavenet-C&text=${userInput}`
	)
		.then(async (res) => {
			await res.blob().then((audioBlob) => {
				AudioStore.set({
					URL: URL.createObjectURL(audioBlob)
				});
			});

			return res.status;
		})
		.catch((error) => {
			throw new Error('Failed to generate TTS audio', error);
		});
}
