<script lang="ts">
	const { data } = $props();

	import Navrow from '$lib/widgets/navrow.svelte';
	import Invio from '$lib/widgets/projects/invio.svelte';
	import Anketo from '$lib/widgets/projects/anketo.svelte';
	import Keisoku from '$lib/widgets/projects/keisoku.svelte';
	import Kittengames from '$lib/widgets/projects/kittengames.svelte';
</script>

<div class="h-full min-h-screen w-full">
	<Navrow destination="/" pagetitle="Coding Projects" />
	<div class="m-2 grid grid-cols-1 gap-2 lg:grid-cols-2">
		<Invio stats={data} cols="col-span-1" />
		<Anketo cols="col-span-1" />
		<Keisoku cols="col-span-1" />
		<Kittengames cols="col-span-1" />
	</div>
</div>
