export const getRandomNonce = (length: number): string => {
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	return Array.from({ length }, () => {
		possible.charAt(Math.floor(Math.random() * possible.length));
	}).join('');
};
