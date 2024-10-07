<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { PageData } from '../$types';
	import { page } from '$app/stores';
	import type { Beyblade } from '$lib/types';
	import BeybladeDetails from '$lib/components/BeybladeDetails.svelte';

	export let data: PageData;

	$: beyblade = data.beyblades.find((b: Beyblade) => b.id === $page.params.id) as
		| Beyblade
		| undefined;
</script>

{#if beyblade}
	<BeybladeDetails {beyblade} />
{/if}
<div class="container mx-auto flex justify-center">
	<a href="/" class="rounded-lg bg-blue-500 px-4 py-2 text-center text-white hover:bg-blue-600"
		>{$_('app.back')}</a
	>
</div>
