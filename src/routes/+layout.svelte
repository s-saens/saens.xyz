<script>
	import Topbutton from '$lib/components/layout/topbutton.svelte';
	import DarkModeToggle from "$lib/components/layout/darkModeToggle.svelte";
	import '../app.scss';
	import { keywords } from '$lib/meta';
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
		justify-content: space-evenly;
		align-items: center;
		z-index: 200;
		position:fixed;

		background-color: rgba(var(--page-background-color-rgb), 0.4);
		backdrop-filter: blur(3px);

		right: 3em;
		bottom:3em;

		width: 80px;
		height: 160px;
		border-radius: 50px;

		color: var(--text-color);

		@include for-tablet-portrait-down {
			width: 70px;
			height: 140px;
			right: 1em;
			bottom:1em;
		}
	}
</style>
