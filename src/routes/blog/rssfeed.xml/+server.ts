import { getPosts } from '$lib/posts';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	const posts = getPosts();

	const xml = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
<channel>
    <title>CodingKitten blog</title>
    <link>https://codingkitten.dev/</link>
    <description>Hi there, in this blog I write about stuff that interests me.</description>
    ${posts
			.map(
				(post) => `
    <item>
        <title>${post.title}</title>
        <link>https://codingkitten.dev/blog/posts/${post.slug}</link>
        <guid>https://codingkitten.dev/blog/posts/${post.slug}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
			)
			.join('')}
</channel>
</rss>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
