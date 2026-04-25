import { getPosts } from '$lib/posts';

export type SearchResult = {
	title: string;
	description: string;
	destination: string;
	type: 'post' | 'project';
};

export const getSearchIndex = (): SearchResult[] => {
	const posts = getPosts().map((post) => ({
		title: post.title,
		description: post.formattedDate,
		destination: `/blog/posts/${post.slug}`,
		type: 'post' as const
	}));

	const projects: SearchResult[] = [
		{ title: 'Invio', description: 'Free and open source invoicing software', destination: '/projects', type: 'project' },
		{ title: 'Keisoku', description: 'Lightweight central stats API', destination: '/projects', type: 'project' },
		{ title: 'Anketo', description: 'Write forms in plain text', destination: '/projects', type: 'project' },
		{ title: 'KittenGames', description: 'Unblocked games website', destination: '/projects', type: 'project' }
	];

	return [...posts, ...projects];
};
