<script lang="ts">
	import RssIcon from 'phosphor-svelte/lib/RssIcon';

	let containerWidth = $state(0);
</script>

<div class="col-span-1 row-span-1 aspect-square rounded-2xl bg-base-200">
	<a href="https://github.com/kittendevv" target="_blank" rel="noopener noreferrer external" class="h-full w-full">
		<div class="flex h-full items-center justify-center text-base-content" bind:clientWidth={containerWidth}>
			<RssIcon size={containerWidth / 4} weight="bold" />
		</div>
	</a>
</div>
