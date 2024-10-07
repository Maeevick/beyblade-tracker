<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { PageData } from './$types';
	import type { Beyblade, SortOrder } from '$lib/types';
	import Card from '$lib/components/BeybladeCard.svelte';
	import SortButton from '$lib/components/SortButton.svelte';
	import FilterBar from '$lib/components/FilterBar.svelte';

	export let data: PageData;

	let beyblades: Beyblade[] = data.beyblades;

	let sortOrder: SortOrder = 'ASC';
	let criteria: string = '';

	$: displayable = beyblades
		.filter((beyblade) => beyblade.name.toLowerCase().includes(criteria.toLowerCase()))
		.sort((a, b) =>
			sortOrder === 'ASC' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
		);

	function handleSort(): void {
		sortOrder = sortOrder === 'ASC' ? 'DESC' : 'ASC';
	}

	async function handleFilter(event: CustomEvent<string>): Promise<void> {
		criteria = event.detail;
	}
</script>

<div class="container mx-auto px-4">
	<h1 class="text-center text-3xl">{$_('app.welcome')} {$_('app.title')}</h1>
	<div class="sticky top-0 z-10 my-4 flex flex-row bg-white p-4">
		<FilterBar on:filter={handleFilter} />
		<SortButton {sortOrder} on:sort={handleSort} />
	</div>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each displayable as beyblade (beyblade.id)}
			<Card {beyblade} />
		{/each}
	</div>
	{#if displayable.length === 0}
		<div class="py-4 text-center">{$_('app.noBeybladeFound')}</div>
	{/if}
</div>
