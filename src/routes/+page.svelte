<script lang="ts">
	import { RedemptionStore } from '../stores/redemption-store';

	let username: string | undefined;
	let userInput: string | undefined;
	let audioPlayer: HTMLAudioElement;
	let audioURL: string;

	$: RedemptionStore.subscribe((data) => {
		username = data.username;
		userInput = data.userInput;

		if (username != undefined && userInput != undefined) {
			generateTTS();
		}
	});

	async function generateTTS() {
		const audioRes = await fetch(
			`https://api.streamelements.com/kappa/v2/speech?voice=ar-XA-Wavenet-C&text=${userInput}`
		)
			.then(async (res) => await res.blob())
			.then((audioBlob) => {
				audioURL = URL.createObjectURL(audioBlob);
				audioPlayer.addEventListener('loadeddata', async () => {
					audioPlayer.play();
				});
			})
			.catch((error) => {
				throw new Error('Failed to generate TTS audio', error);
			});
	}
</script>

<div class={`flex h-screen flex-col items-center justify-start space-y-2 p-4`}>
	<p class="font-bold text-emerald-500">{username}</p>
	<p>{userInput}</p>
</div>

<audio src={audioURL} bind:this={audioPlayer} />
