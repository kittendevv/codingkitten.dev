export const load = async () => {
	const post = await import('./+page.md' as string);
	return {
		title: post.metadata.title
	};
};
