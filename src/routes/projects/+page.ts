export const load = async ({ fetch }) => {
	const res = await fetch('https://keisoku.codingkitten.dev/api/all');
	const item = await res.json();

	return { item };
};
