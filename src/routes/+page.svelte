<script lang="ts">
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

	import '../app.css';
	import { i18nReady } from '$lib/i18n';

	let ready = false;

	onMount(async () => {
		await i18nReady;
		ready = true;
	});
</script>

{#if ready}
	<h1 class="bold m-4 text-center text-4xl">{$_('app.title')}</h1>

	<p class="m-4 text-center text-orange-500">
		{$_('app.cta')}
		<a
			href="https://github.com/Maeevick/beyblade-tracker"
			target="_blank"
			class="text-sm italic text-black">beyblade-tracker</a
		>
		{$_('app.doc')}
	</p>
{:else}
	<div>Loading...</div>
{/if}
