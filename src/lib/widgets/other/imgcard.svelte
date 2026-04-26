<script lang="ts">
	let { img, alt } = $props();
</script>

<div class="break-inside-avoid overflow-hidden rounded-2xl">
	<img src={img} {alt} class="w-full" />
</div>
