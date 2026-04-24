<script lang="ts">
	let { stats, cols } = $props();
	const downloads = () => stats?.item?.['invio-package-downloads']?.formatted ?? '0';
	const stars = () => stats?.item?.['invio-stars']?.formatted ?? '0';

	import StarIcon from 'phosphor-svelte/lib/StarIcon';
	import DownloadSimpleIcon from 'phosphor-svelte/lib/DownloadSimpleIcon';
	import GithubLogoIcon from 'phosphor-svelte/lib/GithubLogoIcon';
	import ReadCvLogoIcon from 'phosphor-svelte/lib/ReadCvLogoIcon';
	import ArrowSquareOutIcon from 'phosphor-svelte/lib/ArrowSquareOutIcon';

	import { SiBun, SiSvelte, SiHono, SiSqlite } from '@icons-pack/svelte-simple-icons';
</script>

<div class="{cols} w-full rounded-2xl bg-base-200 p-4 text-center">
	<!-- Top Row, title, stats, tech -->
	<div class="flex flex-row items-center">
		<!-- Title -->
		<h1 class="font-['Space_Grotesk_Variable'] text-4xl font-bold text-base-content">Invio</h1>
		<!-- Stats -->
		<div class="ml-auto flex items-center">
			<StarIcon size={18} weight="bold" />
			<h2 class="mr-2 text-xl font-medium">{stars()}</h2>
			<DownloadSimpleIcon size={18} weight="bold" />
			<h2 class="text-xl font-medium">{downloads()}</h2>
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
			<div class="ml-1 flex items-center overflow-hidden rounded-md bg-base-300 px-3 py-1">
				<SiSqlite size={18} />
				<h2 class="ml-1 text-xl font-medium">SQLite</h2>
			</div>
		</div>
	</div>

	<div class="mt-1 grid grid-cols-5 grid-rows-2 gap-1">
		<p class="col-span-2 row-span-1 text-left font-['Space_Grotesk_Variable'] text-xl">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque repellat minus asperiores. Animi quis ratione impedit odio accusantium eaque neque blanditiis placeat. Provident architecto, doloremque nostrum error velit culpa?
		</p>
		<img src="images/invio.png" alt="Invio Dashboard Screenshot" class="col-span-3 row-span-2 rounded-lg shadow-md/10 shadow-primary" />
		<div class="col-span-2 row-span-1 mt-auto mr-auto">
			<a href="https://github.com/kittendevv/Invio" class="btn btn-neutral">
				<GithubLogoIcon size={18} weight="fill" />
				Github
			</a>
			<a href="https://github.com/kittendevv/Invio" class="btn btn-ghost">
				<ReadCvLogoIcon size={18} weight="fill" />
				Documentation
			</a>
			<a href="https://github.com/kittendevv/Invio" class="btn btn-ghost">
				<ArrowSquareOutIcon size={18} weight="bold" />
				Live Demo
			</a>
		</div>
	</div>
</div>
