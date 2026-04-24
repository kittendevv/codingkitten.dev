<script lang="ts">
	const { data } = $props();

	import Navrow from '$lib/widgets/navrow.svelte';
	import Invio from '$lib/widgets/projects/invio.svelte';
</script>

<div class="h-full min-h-screen w-full">
	<Navrow destination="/" pagetitle="Coding Projects" />
	<div class="m-2 grid grid-cols-2 gap-2">
		<Invio stats={data} cols="col-span-1" />
	</div>
</div>
