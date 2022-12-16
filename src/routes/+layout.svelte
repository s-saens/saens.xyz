<script>
	import Topbutton from '$lib/components/layout/topbutton.svelte';
	import DarkModeToggle from "$lib/components/layout/darkModeToggle.svelte";
	import '../app.scss';
	import { keywords } from '$lib/meta';
	import CarouselScroller from '../lib/components/base/carousel-scroller.svelte';
</script>

<svelte:head>
	<meta name="keywords" content={keywords.join(', ')} />
</svelte:head>

<div class="container">
	<DarkModeToggle/>
	<Topbutton/>
</div>

<slot />

<style lang="scss">
	@import '../lib/scss/breakpoints.scss';

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 200;
		position:fixed;
		gap: 0.4em;

		background-color: rgba(var(--page-background-color-rgb), 0.4);
		backdrop-filter: blur(3px);

		right: 4em;
		bottom: 4em;

		width: 80px;
		height: 160px;
		border-radius: 50px;

		color: var(--text-color);

		@include for-tablet-portrait-down {
			right: 2em;
			bottom: 2em;
		}
	}
</style>
