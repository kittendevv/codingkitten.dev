import { Redis } from '@upstash/redis';
import type { RequestHandler } from './$types';

function getRedis(platform: App.Platform | undefined) {
	if (!platform) {
		return new Redis({
			url: process.env.UPSTASH_REDIS_REST_URL!,
			token: process.env.UPSTASH_REDIS_REST_TOKEN!
		});
	}
	return new Redis({
		url: platform.env.UPSTASH_REDIS_REST_URL,
		token: platform.env.UPSTASH_REDIS_REST_TOKEN
	});
}

export const GET: RequestHandler = async ({ platform }) => {
	const redis = getRedis(platform);
	const count = (await redis.get<number>('petCount')) ?? 0;
	return Response.json({ count });
};

export const POST: RequestHandler = async ({ platform }) => {
	const redis = getRedis(platform);
	const count = await redis.incr('petCount');
	return Response.json({ count });
};
