<script lang="ts">
	import { resolve } from '$app/paths';

	import CaretLeftIcon from 'phosphor-svelte/lib/CaretLeftIcon';
	let { pagetitle, destination } = $props();
</script>

<div class="m-2 rounded-2xl bg-base-200 py-2">
	<div class="relative flex h-full flex-row items-center p-4">
		<a href={resolve(destination)} class="flex flex-row items-center gap-2 font-[Space_Grotesk_Variable] text-2xl font-bold">
			<CaretLeftIcon weight="fill" />
			Back
		</a>
		<h1 class="pointer-events-none absolute right-0 left-0 text-center font-[Space_Grotesk_Variable] text-2xl">
			{pagetitle}
		</h1>
	</div>
</div>
