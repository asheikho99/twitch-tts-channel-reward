/**
 * 
 * @param ms time to sleep in milliseconds
 * @returns Promise<unknown>
 * @since 17 October, 2023
 * 
 */
export const sleep = (ms: number) => new Promise((f) => setTimeout(f, ms));
