// src/lib/posts.ts
interface PostModule {
	metadata: {
		title: string;
		date: string;
	};
	default: unknown;
}

const options: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
};

export const getPosts = () => {
	const postFiles = import.meta.glob('/src/routes/blog/posts/**/+page.md', { eager: true });

	const posts = Object.entries(postFiles).map(([path, post]) => {
		const { metadata } = post as PostModule;
		return {
			slug: path.replace('/src/routes/blog/posts/', '').replace('/+page.md', ''),
			title: metadata.title,
			date: metadata.date,
			formattedDate: new Date(metadata.date).toLocaleDateString('en-US', options)
		};
	});

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
