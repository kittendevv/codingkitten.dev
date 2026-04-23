import { getPosts } from '$lib/posts';

export const load = () => {
	return { posts: getPosts() };
};
