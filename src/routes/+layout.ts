import type { LayoutLoad } from './$types';
import type { Beyblade } from '$lib/types';

export const load: LayoutLoad = async ({ fetch }) => {
	const response = await fetch('/api/collection');
	const beyblades: Beyblade[] = await response.json();

	return {
		beyblades
	};
};
