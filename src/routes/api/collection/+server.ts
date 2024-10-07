import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { getBeyblades } from '$lib/server/beyblades';

export const GET: RequestHandler = async () => {
	try {
		return json(await getBeyblades());
	} catch (error) {
		console.error('Error fetching beyblades:', error);
		return json({ error: 'Failed to fetch beyblades' }, { status: 500 });
	}
};
