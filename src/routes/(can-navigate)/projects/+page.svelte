<script>
	import { fade, fly } from "svelte/transition";
	import Section from '$lib/components/layout/section.svelte';
	import ProjectCard from '$lib/components/base/project-card.svelte';
	import projectEntries from '$lib/projects';
</script>

<section in:fly="{{y:100, duration:1000}}" out:fade class="wrapper">
	<Section align="top" title="Projects">
		<div class="container">
			{#each projectEntries as p}
				<ProjectCard project={p} />
			{/each}
		</div>
	</Section>
</section>

<style>
	.wrapper {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>