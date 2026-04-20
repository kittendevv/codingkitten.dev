<script lang="ts">
	import { resolve } from '$app/paths';

	let { title, date, destination, cols } = $props();
</script>

<div class="{cols} h-full w-full rounded-2xl bg-base-200">
	<a href={resolve(destination)} class="h-full w-full">
		<div class="flex h-full flex-col items-center justify-center">
			<h1 class="text-center font-[Space_Grotesk_Variable] text-4xl text-base-content">
				{title}
			</h1>
			<p class="text-center font-[Space_Grotesk_Variable] text-base-content">
				{date}
			</p>
		</div>
	</a>
</div>
