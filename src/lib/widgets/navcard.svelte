<script lang="ts">
	import { resolve } from '$app/paths';

	let { title, subtitle, cols, destination } = $props();
</script>

<div class="{cols} row-span-1 h-full w-full rounded-2xl bg-base-200">
	<a href={resolve(destination)} class="group h-full w-full text-4xl">
		<div class="flex h-full flex-col items-center justify-center">
			<h1 class="text-center font-[Space_Grotesk_Variable] text-4xl text-base-content group-hover:underline">
				{title}
			</h1>

			<p class="text-xl no-underline">
				{subtitle}
			</p>
		</div>
	</a>
</div>
