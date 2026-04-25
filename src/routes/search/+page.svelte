<script lang="ts">
	import Navrow from '$lib/widgets/navrow.svelte';
	import Resultcard from '$lib/widgets/search/resultcard.svelte';
	let { data } = $props();
</script>

<div class="h-full min-h-screen w-full">
	<Navrow destination="/" pagetitle={'Results for: ' + data.query} />
	<div class="m-2 grid grid-cols-3 gap-2">
		<Resultcard title="Human Randomness" description="Have you ever wondered about how random humans are?" destination="/blog/posts/human-randomness" type="blog" />
	</div>
</div>
