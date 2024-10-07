<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';

	const dispatch = createEventDispatcher<{ filter: string }>();

	let criteria: string = '';

	function handleInput(): void {
		dispatch('filter', criteria);
	}
</script>

<div class="flex flex-grow items-center text-gray-900">
	<input
		type="text"
		bind:value={criteria}
		on:input={handleInput}
		class="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 focus:border-blue-500 focus:ring-blue-500"
		placeholder={$_('app.filterPlaceholder')}
	/>
</div>
