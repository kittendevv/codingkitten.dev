<script lang="ts">
	let { cols } = $props();

	import WrenchIcon from 'phosphor-svelte/lib/WrenchIcon';

	import { SiBun, SiSvelte, SiHono } from '@icons-pack/svelte-simple-icons';
</script>

<div class="{cols} w-full rounded-2xl bg-base-200 p-4 text-center">
	<!-- Top Row, title, stats, tech -->
	<div class="flex items-center">
		<!-- Title -->
		<div class="flex items-center">
			<h1 class="font-['Space_Grotesk_Variable'] text-4xl font-bold text-base-content">Ankēto</h1>
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
				<SiSvelte size={18} />
				<h2 class="ml-1 text-xl font-medium">Svelte</h2>
			</div>
			<div class="ml-1 flex items-center overflow-hidden rounded-md bg-base-300 px-3 py-1">
				<SiHono size={18} />
				<h2 class="ml-1 text-xl font-medium">Hono</h2>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-5 gap-1">
		<div class="col-span-2">
			<p class="mt-4 h-full w-full text-left font-['Space_Grotesk_Variable'] text-xl">
				I sometimes find myself needing to make a survey for projects. Using form builders for some reason though is not a nice experience, to me atleast.
				<br class="mb-2" />
				That is why I started working on making a form builder that does feel intuitive (to me). Making forms in Ankēto feels like writing markdown. But the result is a beatiful fully interactive form instead of a static page.
			</p>
		</div>
		<img src="images/anketo.webp" alt="Invio Dashboard Screenshot" class="col-span-3 mt-1 rounded-lg shadow-sm shadow-base-300" />
	</div>
</div>
