<script lang="ts">
	import Navrow from '$lib/widgets/navrow.svelte';
	import Blogcard from '$lib/widgets/blog/blogcard.svelte';
	import Rsscard from '$lib/widgets/blog/rsscard.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>kittendevv - blog</title>
</svelte:head>

<div class="h-full min-h-screen w-full">
	<Navrow destination="/" pagetitle="Blog" />
	<div class="m-2 grid grid-cols-3 gap-2 lg:grid-cols-6">
		<Rsscard />
		{#each data.posts as post, i (post.slug)}
			<Blogcard cols={i === 0 ? 'col-span-2 lg:col-span-3' : 'col-span-3 aspect-3/1 lg:col-span-2 lg:aspect-2/1'} title={post.title} date={post.formattedDate} destination="/blog/posts/{post.slug}" />
		{/each}
	</div>
</div>
