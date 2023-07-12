<script lang="ts">
	import { userStore } from '../stores/userStore';

	let username: string;
	let userInput: string;
	let audioPlayer: HTMLAudioElement;
	let audioURL: string;

	$: userStore.subscribe((data) => {
		username = data.username;
		userInput = data.userInput;

		if (username != '' || userInput != '') {
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
				audioPlayer.addEventListener('loadeddata', () => {
					audioPlayer.play();
				});
			})
			.catch((error) => {
				throw new Error('Failed to generate TTS audio', error);
			});
	}
</script>

<p>USER: {username}</p>
<p>MSG: {userInput}</p>

<audio src={audioURL} bind:this={audioPlayer} />
