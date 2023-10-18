<script lang="ts">
	import Message from '../components/message.svelte';
	import AudioPlayer from '../components/audio-player.svelte';
	import { generateTTS } from '$lib/text-to-speech';
	import { RedemptionStore } from '../stores/redemption-store';
	import { updateCustomRewardStatus } from '$lib/twitch';

	$: if ($RedemptionStore.username != undefined) {
		generateTTS()
			.then((status) => {
				if (status != 200) return;
				updateCustomRewardStatus({
					id: $RedemptionStore.id,
					rewardId: $RedemptionStore.rewardId,
					broadcasterId: $RedemptionStore.broadcasterId,
					status: 'FULFILLED',
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}
</script>

<Message bind:username={$RedemptionStore.username} bind:userInput={$RedemptionStore.userInput} />
<AudioPlayer />
