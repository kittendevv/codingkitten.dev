<script lang="ts">
	import { resolve } from '$app/paths';

	let { title, cols, destination } = $props();
</script>

<div class="{cols} row-span-1 h-full w-full rounded-2xl bg-base-200">
	<a href={resolve(destination)} class="h-full w-full text-4xl hover:underline">
		<div class="flex h-full flex-row items-center justify-center">
			<h1 class="text-center font-[Space_Grotesk_Variable] text-4xl text-base-content">
				{title}
			</h1>
		</div>
	</a>
</div>
