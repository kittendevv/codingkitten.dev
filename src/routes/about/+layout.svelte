<script lang="ts">
	import Navrow from '$lib/widgets/navrow.svelte';
	import { page } from '$app/state';
	let { children } = $props();
</script>

<svelte:head>
	<title>kittendevv - about me</title>
</svelte:head>

<Navrow destination="/" pagetitle={page.data.title ?? 'Blog Post'} />

<div class="mx-auto prose max-w-5xl pb-8 prose-invert">
	{@render children()}
</div>
