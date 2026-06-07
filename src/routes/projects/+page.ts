export const load = async ({ fetch }) => {
	const res = await fetch('https://keisoku.kittendevv.hackclub.app/api/all');
	const item = await res.json();

	return { item };
};
