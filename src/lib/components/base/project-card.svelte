<script>
	import Image from '$lib/components/base/image.svelte';

	export let project;
</script>

{#if project}
		<a href="/projects/{project.title}">
		<Image path="projects/{project.title}" filename="cover" alt="Cover Image" 
				add_style="border-radius:40px; box-shadow:3px 5px 20px 0 rgba(8, 8, 8, 0.4)"/>
		</a>
{/if}

<style lang="scss">
	@import '../../../lib/scss/breakpoints.scss';

	a {
		transition: all 0.3s ease;
	}

	a:hover {
		transform: scale(1.03);
	}
</style>


	<!-- <Card url="/blog/{post.slug}">
		<div slot="image">
			{#if showImage}
				<Image path="posts/{post.slug}" filename="cover" alt="Cover Image" />
			{/if}
		</div>
		<div slot="content">
			<div class="title">{post.title}</div>
			<div class="note">{post.readingTime}</div>
			<div class="text">{post.excerpt}</div>
		</div>
		<div slot="footer">
			{#if post.tags}
				<div class="tags">
					{#each post.tags.slice(0, 2) as tag}
						<Tag>{tag}</Tag>
					{/each}
				</div>
			{/if}
		</div>
	</Card> -->