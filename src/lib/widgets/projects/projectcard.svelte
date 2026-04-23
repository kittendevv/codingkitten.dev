<script lang="ts">
	let { title, description, cols } = $props();

	import { SiBun, SiSvelte } from '@icons-pack/svelte-simple-icons';
</script>

<div class="{cols} flex h-96 w-full flex-col items-center justify-center rounded-2xl bg-base-200 p-6 text-center">
	<h1 class="font-['Space_Grotesk_Variable'] text-4xl text-base-content">
		{title}
	</h1>
	<p class="font-['Space_Grotesk_Variable'] text-base-content">
		{description}
	</p>
	<SiSvelte color="#FF3E00" size={90} />
	<SiBun color="#FF3E00" size={90} />
</div>
