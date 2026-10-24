import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const KEY = 'pets';

function getKV(platform: App.Platform | undefined) {
	const kv = platform?.env?.PETCOUNT;
	if (!kv) error(500, 'KV binding PETCOUNT not available');
	return kv;
}

export const GET: RequestHandler = async ({ platform }) => {
	const kv = getKV(platform);
	const count = Number(await kv.get(KEY)) || 0;
	return Response.json({ count });
};

export const POST: RequestHandler = async ({ platform }) => {
	const kv = getKV(platform);
	const count = (Number(await kv.get(KEY)) || 0) + 1;
	await kv.put(KEY, String(count));
	return Response.json({ count });
};
