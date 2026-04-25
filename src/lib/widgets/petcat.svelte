<script lang="ts">
	import { onMount } from 'svelte';
	import CatIcon from 'phosphor-svelte/lib/CatIcon';
	import HeartIcon from 'phosphor-svelte/lib/HeartIcon';

	let { cols } = $props();

	let hasPetted: boolean = $state(false);
	let petCount = $state(0);
	let containerWidth = $state(0);
	let loading = $state(true);
	let isPatching = $state(false);

	async function petCat() {
		if (hasPetted || isPatching) return;

		isPatching = true;
		hasPetted = true; // instant feedback

		const res = await fetch('/api/pet', { method: 'POST' });
		const data = await res.json();
		petCount = data.count;

		isPatching = false;
	}

	onMount(async () => {
		try {
			const res = await fetch('/api/pet');
			const data = await res.json();
			petCount = data.count;
		} finally {
			loading = false;
		}
	});
</script>

<div class="{cols} row-span-1 h-full w-full rounded-2xl bg-base-200">
	<button onclick={petCat} disabled={hasPetted || isPatching || loading} class="h-full w-full cursor-pointer text-4xl disabled:cursor-default disabled:opacity-50">
		<div class="flex items-center justify-center" bind:clientWidth={containerWidth}>
			{#if loading}
				<span class="loading loading-lg loading-spinner"></span>
			{:else if !hasPetted}
				<CatIcon size={containerWidth / 8} weight="fill" />
				<div class="ml-1 flex flex-col text-left">
					<h1>Pet the cat</h1>
					<p class="text-xl">This cat has received {petCount} pats</p>
				</div>
			{:else}
				<HeartIcon size={containerWidth / 8} weight="fill" />
				<div class="ml-1 flex flex-col text-left">
					<h1>Purr, thank you</h1>
					<p class="text-xl">This cat has received {petCount} pats</p>
				</div>
			{/if}
		</div>
	</button>
</div>
