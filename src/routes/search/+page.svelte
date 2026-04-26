<script lang="ts">
	import Navrow from '$lib/widgets/navrow.svelte';
	import Resultcard from '$lib/widgets/search/resultcard.svelte';
	let { data } = $props();
</script>

<div class="h-full min-h-screen w-full">
	<Navrow destination="/" pagetitle={'Results for: ' + data.query} />
	<div class="m-2 grid grid-cols-1 gap-2 md:grid-cols-2">
		{#each data.results as result (result.destination)}
			<Resultcard title={result.title} description={result.description} destination={result.destination} type={result.type} />
		{/each}
		{#if data.query === '67'}
			<p class="col-span-2 text-center text-4xl text-base-content">Really?</p>
		{:else if data.query === '69'}
			<p class="col-span-2 text-center text-4xl text-base-content">69 is the objectively better meme number. Props to you</p>
		{:else if data.query === 'knock knock'}
			<p class="col-span-2 text-center text-4xl text-base-content">
				Who is there?
				<br class="mb-2" />
				We.
				<br class="mb-2" />
				We who?
				<br class="mb-2" />
				Are you an ambulance?
			</p>
		{:else if data.query === 'dante'}
			<img src="/images/dante.jpeg" alt="dante (cat)" class="col-span-2" />
		{:else if data.query === 'cat'}
			<img src="https://cataas.com/cat?height=600" alt="random cat" class="col-span-2 mx-auto" />
		{:else if data.query === 'caffeine'}
			<p class="col-span-2 text-center text-4xl text-base-content">
				Did I drink caffeine test
				<br class="mb-2" />
				Did you consume a caffeinated bevarage?
				<br class="mb-4" />
				Yes: I you drank caffeine
				<br class="mb-2" />
				No: you didnt drink caffeine
			</p>
		{:else if data.query === 'gamble'}
			<img src="/images/gamble.gif" alt="lets go gambling!" class="col-span-2 mx-auto min-h-100" />
		{:else if data.results.length === 0}
			<p class="teReallyxt-center col-span-2 text-base-content/50">No results found for "{data.query}"</p>
		{/if}
	</div>
</div>
