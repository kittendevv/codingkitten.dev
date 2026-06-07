<script lang="ts">
	let { stats, cols } = $props();
	const downloads = () => stats?.invio_total_downloads?.total?.formatted ?? '0';
	const stars = () => stats?.['github.stars.kittendevv/Invio']?.stars ?? '0';

	import StarIcon from 'phosphor-svelte/lib/StarIcon';
	import DownloadSimpleIcon from 'phosphor-svelte/lib/DownloadSimpleIcon';
	import GithubLogoIcon from 'phosphor-svelte/lib/GithubLogoIcon';
	import ReadCvLogoIcon from 'phosphor-svelte/lib/ReadCvLogoIcon';
	import ArrowSquareOutIcon from 'phosphor-svelte/lib/ArrowSquareOutIcon';

	import { SiBun, SiSvelte, SiHono, SiDeno } from '@icons-pack/svelte-simple-icons';
</script>

<div class="{cols} w-full rounded-2xl bg-base-200 p-4">
	<!-- Top Row, title, stats, tech -->
	<div class="flex items-center">
		<!-- Title -->
		<h1 class="font-['Space_Grotesk_Variable'] text-4xl font-bold text-base-content">Invio</h1>
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
				<SiDeno size={18} />
				<h2 class="ml-1 text-xl font-medium">Deno</h2>
			</div>
			<div class="ml-1 flex items-center overflow-hidden rounded-md bg-base-300 px-3 py-1">
				<SiHono size={18} />
				<h2 class="ml-1 text-xl font-medium">Hono</h2>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-1 md:grid-cols-5">
		<div class="col-span-1 md:col-span-2">
			<div class="flex items-center">
				<StarIcon size={18} weight="bold" />
				<h2 class="mr-2 text-xl font-medium">{stars()}</h2>
				<DownloadSimpleIcon size={18} weight="bold" />
				<h2 class="mr-2 text-xl font-medium">{downloads()}</h2>
			</div>
			<p class="mt-4 text-left font-['Space_Grotesk_Variable'] text-xl">
				Free and open invoicing software, I made Invio because current invoicing solutions felt too heavy for my use case; selling computers I build.
				<br class="mb-2" />
				Invio is not meant to be a full bookkeeping solution. Just invoices, nothing else.
			</p>
		</div>
		<img src="images/invio.png" alt="Invio Dashboard Screenshot" class="col-span-1 mt-1 rounded-lg shadow-sm shadow-base-300 md:col-span-3" />
	</div>
	<div class="mt-2">
		<a href="https://github.com/kittendevv/Invio" target="_blank" rel="noopener noreferrer external" class="btn btn-neutral">
			<GithubLogoIcon size={18} weight="fill" />
			Github
		</a>
		<a href="https://github.com/kittendevv/Invio" target="_blank" rel="noopener noreferrer external" class="btn btn-ghost">
			<ReadCvLogoIcon size={18} weight="fill" />
			Documentation
		</a>
		<a href="https://github.com/kittendevv/Invio" target="_blank" rel="noopener noreferrer external" class="btn btn-ghost">
			<ArrowSquareOutIcon size={18} weight="bold" />
			Live Demo
		</a>
	</div>
</div>
