<script lang="ts">
	import Navrow from '$lib/widgets/navrow.svelte';
	import Projectcard from '$lib/widgets/projects/projectcard.svelte';

	let projects = [
		{ title: 'Invio', description: 'Selfhosted invoicing software without feature bloat.' },
		{ title: 'Keisoku', description: 'Easily measure stats without staying up to date on api changes.' },
		{ title: 'Anketo', description: 'Write beatiful forms and surveys in plain text.' }
	];
</script>

<div class="h-full min-h-screen w-full">
	<Navrow destination="/" pagetitle="Coding Projects" />
	<div class="m-2 grid grid-cols-3 gap-2">
		{#each projects as project (project.title)}
			<Projectcard title={project.title} description={project.description} cols="col-span-1" />
		{/each}
	</div>
</div>
