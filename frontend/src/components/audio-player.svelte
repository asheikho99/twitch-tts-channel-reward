<script lang="ts">
	import { onMount } from 'svelte';
	import { AudioStore } from '../stores/audio-store';

	let audioPlayer: HTMLAudioElement;
	let audioURL: string | undefined;

	onMount(() => {
		AudioStore.subscribe((values) => {
			audioURL = values.URL;

			audioPlayer.addEventListener('loadeddata', async () => {
				try {
					await audioPlayer.play();
				} catch (err) {
					console.error('Audio play failed:', err);
				}
			});

			audioPlayer.addEventListener('error', () => {
				console.error('Audio error:', audioPlayer.error);
			});
		});
	});
</script>

<audio src={audioURL} bind:this={audioPlayer} />
