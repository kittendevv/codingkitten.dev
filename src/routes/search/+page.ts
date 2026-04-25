import type { PageLoad } from './$types';
import { getSearchIndex } from '$lib/search';

export const load: PageLoad = ({ url }) => {
	const query = url.searchParams.get('q') ?? '';
	const results = getSearchIndex().filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) || item.description.toLowerCase().includes(query.toLowerCase()));
	return { query, results };
};
