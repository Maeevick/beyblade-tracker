<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { Redo, Undo, Info } from 'lucide-svelte';
	import type { Beyblade } from '$lib/types';

	export let beyblade: Beyblade;
</script>

<div
	class={`transform overflow-hidden rounded-lg border-4 border-double ${beyblade.rotation === 'RIGHT' ? 'border-blue-500' : 'border-red-500'} bg-white p-2 text-gray-900 shadow-md transition-transform duration-300 hover:scale-105`}
>
	<section class="h-48 cursor-pointer">
		<img src={beyblade.thumbnail} alt={beyblade.name} class="h-full w-full object-cover" />
		<div class="left-2 top-2 rounded-full bg-white p-1"></div>
	</section>
	<div class="p-4">
		<h2 class="mb-2 flex flex-row text-xl font-bold">
			<span class="flex-grow">{beyblade.name}</span>
			{#if beyblade.rotation === 'RIGHT'}
				<Redo class="inline-block text-blue-500" />
			{:else}
				<Undo class="inline-block text-red-500" />
			{/if}
		</h2>
		<a href={`/${beyblade.id}`} class="flex flex-row text-blue-500 hover:text-blue-700">
			<span class="flex-grow">{$_('app.details')}</span>
			<Info class="mr-1 inline-block" />
		</a>
	</div>
</div>
