<script lang="ts">
	import MagnifyingGlassIcon from 'phosphor-svelte/lib/MagnifyingGlassIcon';
	let containerHeight = $state(0);
	let query = $state('');

	function redirectSearch() {
		location.href = `/search?q=${encodeURIComponent(query)}`;
	}
</script>

<div class="col-span-2 row-span-1 rounded-2xl bg-base-200">
	<div class="flex h-full items-center justify-center text-base-content" bind:clientHeight={containerHeight}>
		<label class="input h-1/3 w-4/5 input-ghost">
			<MagnifyingGlassIcon size={containerHeight / 6} weight="fill" />
			<input type="search" placeholder="Search..." class="ml-2 grow text-4xl placeholder:text-base-content" bind:value={query} onkeydown={(e) => e.key === 'Enter' && redirectSearch()} />
		</label>
	</div>
</div>
