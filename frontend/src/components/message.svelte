<script lang="ts">
	export let username: string;
	export let userInput: string;
</script>

{#if username && userInput}
	<div class={`flex h-screen flex-col items-center justify-start space-y-2 p-4`}>
		<p class="font-bold text-emerald-500">{username}</p>
		<p>{userInput}</p>
	</div>
{/if}
