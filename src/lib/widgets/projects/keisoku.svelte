<script lang="ts">
	let { cols } = $props();

	import WrenchIcon from 'phosphor-svelte/lib/WrenchIcon';

	import { SiBun, SiSwagger, SiHono } from '@icons-pack/svelte-simple-icons';
</script>

<div class="{cols} w-full rounded-2xl bg-base-200 p-4 text-center">
	<!-- Top Row, title, stats, tech -->
	<div class="flex items-center">
		<!-- Title -->
		<div class="flex items-center">
			<h1 class="font-['Space_Grotesk_Variable'] text-4xl font-bold text-base-content">Keisoku</h1>
			<div class="ml-2 flex items-center overflow-hidden rounded-md bg-base-300 px-3 py-1">
				<WrenchIcon size={18} weight="fill" />
				<h2 class="ml-1 text-xl font-medium">Not Done Yet</h2>
			</div>
		</div>
		<!-- Stats -->
		<div class="ml-auto flex items-center">
			<!-- Tech Cards -->
			<div class="ml-2 flex items-center overflow-hidden rounded-md bg-base-300 px-3 py-1">
				<SiBun size={18} />
				<h2 class="ml-1 text-xl font-medium">Bun</h2>
			</div>
			<div class="ml-1 flex items-center overflow-hidden rounded-md bg-base-300 px-3 py-1">
				<SiHono size={18} />
				<h2 class="ml-1 text-xl font-medium">Hono</h2>
			</div>
			<div class="ml-1 flex items-center overflow-hidden rounded-md bg-base-300 px-3 py-1">
				<SiSwagger size={18} />
				<h2 class="ml-1 text-xl font-medium">Swagger</h2>
			</div>
		</div>
	</div>

	<p class="mt-4 h-full w-full text-left font-['Space_Grotesk_Variable'] text-xl">
		When I started making a website for Invio I found myself searching: "how to retrieve ghcr package downloads" and thinking there has to be an easier way.
		<br class="mb-2" />
		There is, that is how I came up with keisoku. The idea is a simple lightweight central stats API. Eventhough the project is not done you are looking at it on this page, the stats in the Invio card are pulled from my very own keisoku instance.
	</p>
</div>
