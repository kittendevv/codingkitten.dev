<script lang="ts">
	import Navrow from '$lib/widgets/navrow.svelte';

	import Imgcard from '$lib/widgets/other/imgcard.svelte';

	const images = [
		{ img: '/gallery/dante-box.jpeg', alt: 'my cat <3' },
		{ img: '/gallery/pc5.jpeg', alt: 'desktop' },
		{ img: '/gallery/forest.jpeg', alt: 'aesthetic forest' },
		{ img: '/gallery/pc3.jpeg', alt: 'pc' },
		{ img: '/gallery/dante-hat.jpeg', alt: 'my cat <3' },
		{ img: '/gallery/pc1.jpeg', alt: 'computer' },
		{ img: '/gallery/piano.jpeg', alt: 'used to play piano' },
		{ img: '/gallery/pc2.jpeg', alt: 'yet another computer' },
		{ img: '/gallery/dante-chair.jpeg', alt: 'my cat <3' },
		{ img: '/gallery/poster.jpeg', alt: 'my very own playing card poster' },
		{ img: '/gallery/waterfall.jpeg', alt: 'splash' },
		{ img: '/gallery/dante-window.jpeg', alt: 'my cat <3' },
		{ img: '/gallery/pc4.jpeg', alt: 'pc' }
	];
</script>

<svelte:head>
	<title>kittendevv - image gallery</title>
</svelte:head>

<div class="h-full min-h-screen w-full">
	<Navrow destination="/" pagetitle="Image Gallery" />
	<div class="columns-2 gap-2 space-y-2 md:columns-3 lg:columns-4">
		{#each images as image (image.img)}
			<Imgcard img={image.img} alt={image.alt} />
		{/each}
	</div>
</div>
