import { Redis } from '@upstash/redis';
import { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } from '$env/dynamic/private';

const redis = new Redis({
	url: UPSTASH_REDIS_REST_URL,
	token: UPSTASH_REDIS_REST_TOKEN
});

export async function GET() {
	const count = (await redis.get<number>('petCount')) ?? 0;
	return Response.json({ count });
}

export async function POST() {
	const count = await redis.incr('petCount');
	return Response.json({ count });
}
