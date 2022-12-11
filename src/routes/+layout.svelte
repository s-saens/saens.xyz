<script>
	import Topbutton from './../lib/components/layout/topbutton.svelte';
	import DarkModeToggle from "./../lib/components/layout/darkModeToggle.svelte";
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
		justify-content: center;
		align-items: center;
		z-index: 200;
		position:fixed;
		display: flex;
		flex-direction: column;
		gap: 30px;

		right: 4em;
		bottom: 4em;

		width: 0;
		height: auto;

		color: var(--text-color);
		stroke: var(--text-color);

		@include for-tablet-portrait-down {
			right: 1em;
			bottom: 1em;
		}
	}
</style>
