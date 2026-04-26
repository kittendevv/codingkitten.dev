<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/space-grotesk/wght.css';

	import { onMount } from 'svelte';
	import { applyTheme, getTheme } from '$lib/theme';

	let { children } = $props();

	onMount(() => {
		applyTheme(getTheme());
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="description" content="Hi I am kittendevv, a teenage hobby dev from the Netherlands with interests in hardware, software, design and music." />
	<title>kittendevv</title>
	<meta property="og:title" content="kittendevv" />
	<meta property="og:description" content="Hi I am kittendevv, a teenage hobby dev from the Netherlands with interests in hardware, software, design and music." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://codingkitten.dev" />
	<meta property="og:image" content="https://cdn.hackclub.com/019dc996-399f-74e0-8b1b-a31128338e37/image(1).png" />
</svelte:head>

{@render children()}
