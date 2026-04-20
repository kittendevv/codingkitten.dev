<script lang="ts">
	import Navrow from '$lib/widgets/navrow.svelte';
	import Blogcard from '$lib/widgets/blog/blogcard.svelte';
	import Rsscard from '$lib/widgets/blog/rsscard.svelte';

	let { data } = $props();
</script>

<div class="h-full min-h-screen w-full">
	<Navrow destination="/" pagetitle="Blog" />
	<div class="m-2 grid grid-cols-6 gap-2">
		<Rsscard />
		{#each data.posts as post (post.slug)}
			<Blogcard cols="col-span-2" title={post.title} date={post.formattedDate} destination="/blog/posts/{post.slug}" />
		{/each}
	</div>
</div>
