export function interval(n: number): number[] {
	if (n != Math.floor(n) || n <= 0) return [];
	return new Array(n).fill(0).map((_, i) => i);
}
