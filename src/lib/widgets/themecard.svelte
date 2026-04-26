<script lang="ts">
	import { onMount } from 'svelte';
	import { applyTheme, getTheme } from '$lib/theme';

	import MoonIcon from 'phosphor-svelte/lib/MoonIcon';
	import SunIcon from 'phosphor-svelte/lib/SunIcon';

	let isDark = $state(true);
	let container: HTMLDivElement;
	let containerWidth = $state(0);

	onMount(() => {
		const saved = getTheme();
		isDark = saved;
		applyTheme(saved);

		// initial measurement
		containerWidth = container?.clientWidth ?? 0;

		// keep it responsive
		const resizeObserver = new ResizeObserver(() => {
			containerWidth = container?.clientWidth ?? 0;
		});

		if (container) resizeObserver.observe(container);

		return () => resizeObserver.disconnect();
	});

	function flipTheme() {
		isDark = !isDark;
		applyTheme(isDark);
	}
</script>

<div bind:this={container} class="col-span-1 row-span-1 rounded-2xl bg-base-200">
	<button class="h-full w-full cursor-pointer" onclick={flipTheme}>
		<div class="flex h-full items-center justify-center text-base-content">
			{#if isDark}
				<MoonIcon size={containerWidth / 4} weight="fill" />
			{:else}
				<SunIcon size={containerWidth / 4} weight="fill" />
			{/if}
		</div>
	</button>
</div>
