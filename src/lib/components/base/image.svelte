<script>
	export let alt = "image is not loaded";
	export let path = null;
	export let filename;
	export let figcaption = null;
	export let add_style = "";
	let imageSrc;

	$: imageSrc = `/optimized-images/${path ? path + '/' : ''}${filename}`;
</script>

<picture>
	<img src="{imageSrc}.png" {alt} loading="lazy" decoding="async" style={add_style}/>

	{#if figcaption}
		<!-- svelte-ignore a11y-structure -->
		<figcaption>{@html figcaption}</figcaption>
	{/if}
</picture>

<style lang="scss">
	picture {
		position: relative;
		width: 100%;
		height: 100%;

		img {
			border-radius: 10px;
			width: 100%;
			height: 100%;
		}
	}
</style>
