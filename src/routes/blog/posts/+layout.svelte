<script lang="ts">
	import Navrow from '$lib/widgets/navrow.svelte';
	import { page } from '$app/state';
	let { children } = $props();
</script>

<Navrow destination="/blog" pagetitle={page.data.title ?? 'Blog Post'} />

<div class="prose max-w-5xl p-8 prose-invert">
	{@render children()}
</div>
