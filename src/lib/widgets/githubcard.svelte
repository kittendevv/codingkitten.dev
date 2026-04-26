<script lang="ts">
	import GithubLogoIcon from 'phosphor-svelte/lib/GithubLogoIcon';

	let containerWidth = $state(0);
</script>

<div class="col-span-1 row-span-1 rounded-2xl bg-base-200">
	<a href="https://github.com/kittendevv" target="_blank" rel="noopener noreferrer external" class="h-full w-full">
		<div class="flex h-full items-center justify-center text-base-content" bind:clientWidth={containerWidth}>
			<GithubLogoIcon size={containerWidth / 4} weight="fill" />
		</div>
	</a>
</div>
