<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { ArrowUpDown } from 'lucide-svelte';

	import type { SortOrder } from '$lib/types';

	export let sortOrder: SortOrder;

	const dispatch = createEventDispatcher<{ sort: void }>();

	function handleClick(): void {
		dispatch('sort');
	}
</script>

<div class="flex flex-shrink-0 items-center">
	<button
		on:click={handleClick}
		class="ml-4 rounded-lg bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
	>
		<ArrowUpDown size={20} class="mr-2 inline-block" />
		<span class="hidden md:inline-block">{$_('app.sortButton')}</span>
		<span class="">{sortOrder === 'ASC' ? 'A-Z' : 'Z-A'}</span>
	</button>
</div>
