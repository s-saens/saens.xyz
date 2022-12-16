<script>
	import '../../../../app.scss';

	import Image from '$lib/components/base/image.svelte';
	import Tag from '$lib/components/base/tag.svelte';
	import dateformat from 'dateformat';
	import BlogPostCard from '$lib/components/base/blog-post-card.svelte';
	import ThreeByThreeGrid from '$lib/components/layout/3x3-grid.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import { keywords, siteBaseUrl, title } from '$lib/meta';

	import { fade, fly } from "svelte/transition";

	export let data;
	$: ({ post } = data);
</script>

<svelte:head>
	<meta name="keywords" content={post.tags.concat(keywords).join(', ')} />

	<meta name="description" content={post.excerpt} />
	<meta property="og:description" content={post.excerpt} />
	<meta name="twitter:description" content={post.excerpt} />

	<meta property="og:title" content="{post.title} - {title}" />
	<meta name="twitter:title" content="{post.title} - {title}" />

	<meta property="og:image" content="{siteBaseUrl}/images/posts/{post.slug}/cover.jpg" />
	<meta name="twitter:image" content="{siteBaseUrl}/images/posts/{post.slug}/cover.jpg" />
</svelte:head>

<div class="markdown-layout" in:fly="{{y:100, duration:1000}}" out:fade id="blog">
	<div style="height:7em"/>
	<main>
		<article id="markdown-content">
			<div class="header">
				<h1>{post.title}</h1>
				<div class="note">Published on {dateformat(post.date, 'UTC:dd mmmm yyyy')}</div>
				{#if post.updated}
					<div class="note">Updated on {dateformat(post.updated, 'UTC:dd mmmm yyyy')}</div>
				{/if}
				<div class="note">{post.readingTime}</div>
				<div class="tags">
					{#each post.tags as tag}
						<Tag>{tag}</Tag>
					{/each}
				</div>
			</div>
			<div class="content">
				<slot />
			</div>
		</article>

		{#if post.relatedPosts && post.relatedPosts.length > 0}
			<div class="related-posts container">
				<Section
					title="Related posts"
					description="Check out the other posts related."
					align="top"
				>
					<ThreeByThreeGrid>
						{#each post.relatedPosts as rel}
							<BlogPostCard post={rel} />
						{/each}
					</ThreeByThreeGrid>
				</Section>
			</div>
		{/if}
	</main>
</div>