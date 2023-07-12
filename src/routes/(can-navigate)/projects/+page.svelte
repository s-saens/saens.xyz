<script>
	import { fade, fly } from "svelte/transition";
	import Section from '$lib/components/layout/section.svelte';
	import ProjectCard from '$lib/components/base/project-card.svelte';
	import projectEntries from '$lib/projects';
</script>

<section in:fly="{{y:100, duration:1000}}" out:fade class="wrapper">
	<Section align="top" title="">
		<div class="container">
			{#each projectEntries as p}
				<ProjectCard project={p} />
			{/each}
		</div>
	</Section>
</section>

<style lang="scss">
	@import '../../../lib/scss/breakpoints.scss';

	.wrapper {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.container {
		
		padding: 4em 4em;
		color: var(--text-color);
		font-size: 16px;
		max-width: 360px;
		position: relative;
		

		@include for-tablet-portrait-down {
			padding: 4em 3em;
			gap: 20px 40px;
		}
		@include for-phone-only {
			padding: 4em 1em;
			gap: 30px 30px;
			display: flex;
			flex-direction: column;
		}
	}

</style>