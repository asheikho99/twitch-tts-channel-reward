<script lang="ts">
	import Message from '../components/message.svelte';
	import AudioPlayer from '../components/audio-player.svelte';
	import { generateTTS } from '$lib/text-to-speech';
	import { RedemptionStore } from '../stores/redemption-store';

	$: if ($RedemptionStore.username != undefined) {
		generateTTS();
	}
</script>

<Message bind:username={$RedemptionStore.username} bind:userInput={$RedemptionStore.userInput} />
<AudioPlayer />
