<script lang="ts">
	import Navcard from '$lib/widgets/navcard.svelte';
	import Themecard from '$lib/widgets/themecard.svelte';
	import Githubcard from '$lib/widgets/githubcard.svelte';
	import Donatecard from '$lib/widgets/donatecard.svelte';
	import Searchbar from '$lib/widgets/searchbar.svelte';
</script>

<div class="min-h-screen">
	<div class="h-full min-h-screen w-full">
		<div class="m-2 grid grid-cols-5 grid-rows-3 gap-2">
			<!-- Row 1 -->
			<Searchbar />
			<Navcard title="Blog" destination="/blog" cols="col-span-2" />
			<Themecard />
			
			<!-- Row 2 -->
			<Githubcard />
			<Navcard title="Coding Projects" destination="/" cols="col-span-2" />
			<Navcard title="Other Projects" destination="/" cols="col-span-2" />
			<Navcard title="About me" destination="/" cols="col-span-2" />

			<!-- Row 3 -->
			<Navcard title="" destination="/" cols="col-span-2" />
			<Donatecard />
		</div>
	</div>
</div>
