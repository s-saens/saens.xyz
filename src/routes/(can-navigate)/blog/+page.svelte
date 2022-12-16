<script>
	import { fade, fly } from "svelte/transition";
	import BlogGrid from '$lib/components/layout/3-2-1-grid.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import BlogPostCard from '$lib/components/base/blog-post-card.svelte';

	export let data;

	let { posts } = data;
</script>

<section in:fly="{{y:100, duration:1000}}" out:fade id="blog">
	<div style="height:9em"/>
	<Section align="top" title="All posts">
		<div class="container">
			<BlogGrid>
				{#each posts as post}
					<BlogPostCard {post} />
				{/each}
			</BlogGrid>
		</div>
	</Section>
</section>

<style>
</style>