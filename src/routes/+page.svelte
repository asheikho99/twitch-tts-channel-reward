<script lang="ts">
	import { userStore } from '../stores/userStore';

	let username: string;
	let userInput: string;

	$: userStore.subscribe((data) => {
		username = data.username;
		userInput = data.userInput;
		console.log(data);
	});
</script>

<p>USER: {username}</p>
<p>MSG: {userInput}</p>

