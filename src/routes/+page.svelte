<script lang="ts">
	import Navcard from '$lib/widgets/navcard.svelte';
	import Themecard from '$lib/widgets/themecard.svelte';
	import Githubcard from '$lib/widgets/githubcard.svelte';
	import Donatecard from '$lib/widgets/donatecard.svelte';
	import Searchbar from '$lib/widgets/searchbar.svelte';
	import Petcat from '$lib/widgets/petcat.svelte';
</script>

<div class="min-h-screen">
	<div class="h-full min-h-screen w-full">
		<div class="m-2 grid grid-cols-5 grid-rows-3 gap-2">
			<!-- Row 1 -->
			<Searchbar />
			<Navcard title="Blog" subtitle="Posts about what intrests me" destination="/blog" cols="col-span-2" />
			<Themecard />

			<!-- Row 2 -->
			<Githubcard />
			<Navcard title="Coding Projects" subtitle="I am a developer after all" destination="/projects" cols="col-span-2" />
			<Navcard title="Other Projects" subtitle="Jack of all trades I guess" destination="/" cols="col-span-2" />
			<Navcard title="About me" subtitle="Who even is this guy?" destination="/about" cols="col-span-2" />

			<!-- Row 3 -->
			<Petcat cols="col-span-2" />
			<Donatecard />
		</div>
	</div>
</div>
