<script lang="ts">
	let { cols } = $props();

	import ArchiveIcon from 'phosphor-svelte/lib/ArchiveIcon';

	import { SiNextdotjs, SiNodedotjs, SiCaddy } from '@icons-pack/svelte-simple-icons';
</script>

<div class="{cols} w-full rounded-2xl bg-base-200 p-4 text-center">
	<!-- Top Row, title, stats, tech -->
	<div class="flex items-center">
		<!-- Title -->
		<div class="flex items-center">
			<h1 class="font-['Space_Grotesk_Variable'] text-4xl font-bold text-base-content">KittenGames</h1>
			<div class="ml-2 flex items-center overflow-hidden rounded-md bg-base-300 px-3 py-1">
				<ArchiveIcon size={18} weight="fill" />
				<h2 class="ml-1 text-xl font-medium">Archived</h2>
			</div>
		</div>
		<!-- Stats -->
		<div class="ml-auto flex items-center">
			<!-- Tech Cards -->
			<div class="ml-2 flex items-center overflow-hidden rounded-md bg-base-300 px-3 py-1">
				<SiNextdotjs size={18} />
				<h2 class="ml-1 text-xl font-medium">Next.js</h2>
			</div>
			<div class="ml-1 flex items-center overflow-hidden rounded-md bg-base-300 px-3 py-1">
				<SiNodedotjs size={18} />
				<h2 class="ml-1 text-xl font-medium">Node.js</h2>
			</div>
			<div class="ml-1 flex items-center overflow-hidden rounded-md bg-base-300 px-3 py-1">
				<SiCaddy size={18} />
				<h2 class="ml-1 text-xl font-medium">Caddy</h2>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-1 md:grid-cols-5">
		<div class="col-span-1 md:col-span-2">
			<p class="mt-4 h-full w-full text-left font-['Space_Grotesk_Variable'] text-xl">A classic web developer project (atleast I think so), my very own games website. During the few years I kept it up it became the #1 unblocked games website in my entire school.</p>
		</div>
		<img src="images/kittengames.png" alt="Invio Dashboard Screenshot" class="col-span-1 mt-1 rounded-lg shadow-sm shadow-base-300 md:col-span-3" />
	</div>
</div>
