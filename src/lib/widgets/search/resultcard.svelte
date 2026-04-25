<script lang="ts">
	import { resolve } from '$app/paths';
	import ArticleIcon from 'phosphor-svelte/lib/ArticleIcon';
	import CodeIcon from 'phosphor-svelte/lib/CodeIcon';

	let { title, description, type, destination } = $props();
</script>

<div class="col-span-1 h-full w-full rounded-2xl bg-base-200 p-4">
	<a href={resolve(destination)} class="group h-full w-full text-4xl">
		<div class="flex h-full flex-col">
			<div class="flex w-full items-center">
				<h1 class="mr-auto text-center font-[Space_Grotesk_Variable] text-4xl text-base-content group-hover:underline">
					{title}
				</h1>
				{#if type == 'post'}
					<div class="flex items-center overflow-hidden rounded-md bg-base-300 px-3 py-1">
						<ArticleIcon size={18} weight="fill" />
						<h2 class="ml-1 text-xl font-medium">Blog</h2>
					</div>
				{:else}
					<div class="flex items-center overflow-hidden rounded-md bg-base-300 px-3 py-1">
						<CodeIcon size={18} weight="fill" />
						<h2 class="ml-1 text-xl font-medium">Project</h2>
					</div>
				{/if}
			</div>

			<p class="text-xl no-underline">
				{description}
			</p>

			<p class="text-sm italic no-underline opacity-80">
				{destination}
			</p>
		</div>
	</a>
</div>
