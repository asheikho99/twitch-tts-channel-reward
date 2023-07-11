import { writable } from 'svelte/store';
export const userStore = writable<{ username: string; userInput: string }>({
	username: '',
	userInput: ''
});
