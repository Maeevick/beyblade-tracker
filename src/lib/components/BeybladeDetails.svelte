<script lang="ts">
	import { _ } from 'svelte-i18n';

	import type { Beyblade } from '$lib/types';

	export let beyblade: Beyblade;
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="mb-8 text-center text-3xl font-bold">{beyblade.name}</h1>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		<div>
			<img
				src={beyblade.thumbnail}
				alt={beyblade.name}
				class={`h-auto w-full rounded-lg border-4 border-double shadow-lg ${
					beyblade.rotation === 'RIGHT' ? 'border-blue-500' : 'border-red-500'
				}`}
			/>
		</div>
		<div class="">
			<h2 class="mb-4 text-2xl font-semibold">Description</h2>
			<p>{beyblade.description}</p>

			<h2 class="mb-4 mt-8 text-2xl font-semibold">{$_('app.characteristics')}</h2>
			<ul class="space-y-2">
				<li><strong>Attack:</strong> {beyblade.attack}</li>
				<li><strong>Defense:</strong> {beyblade.defense}</li>
				<li><strong>Burst:</strong> {beyblade.burst}</li>
				<li><strong>Agility:</strong> {beyblade.agility}</li>
				<li><strong>Stamina:</strong> {beyblade.stamina}</li>
				<li><strong>Weight:</strong> {beyblade.weight}</li>
				<li><strong>Rotation:</strong> {$_(`app.${beyblade.rotation.toLocaleLowerCase()}`)}</li>
			</ul>
		</div>
	</div>
</div>
