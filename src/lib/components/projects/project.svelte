<script>
	import Tag from '$lib/components/base/tag.svelte';
	import iOS_Icon from '../../svg/store-links/ios_icon.svelte';
	import Android_Icon from '../../svg/store-links/android_icon.svelte';
	import Default_Icon from '../../svg/store-links/default_icon.svelte';
	import Image from '../base/image.svelte';
	import CarouselScroller from '../base/carousel-scroller.svelte';
	export let project;

	function determinePlatform(path) {
		if(path.includes("play.google.com")) return Android_Icon;
		else if(path.includes("apps.apple.com")) return iOS_Icon;
		return Default_Icon;
	}
</script>

<article class="container">
	<section class="photo">
		<Image	path="projects/{project.title}"
				filename="cover"
				alt="cover image"
				add_style="border-radius:40px; box-shadow:0 0 20px 0 rgba(8, 8, 8, 0.4)"
		/>
	</section>
	<section class="title">
		<h1 class="title-content">{project.title}</h1>
		<div class="title-content links">
		{#each project.links as l}
				<a href={l} class="link"><svelte:component this={determinePlatform(l)}/></a>
		{/each}
		</div>
	</section>
	<section class="tags">
		{#each project.tags as t}
			<Tag>{t}</Tag>
		{/each}
	</section>
	<section class="screenshots">
		<div class="carousel-wrapper">
			<div class="carousel">
			{#each project.screenshots as i}
				<div class="img-container">
				<Image  path="projects/{project.title}"
						filename={i}
						alt={i}/>
				</div>
			{/each}
			</div>
		</div>
	</section>
	<section class="releases">
		<h2>Release History</h2>
		{#each project.releases as r}
			<details>
				<summary>
					<b>{r.version}</b> - {r.date}
				</summary>
				
				<ul>
					{#each r.changes as c}<li>{c}</li>{/each}
				</ul>
			</details>
		{/each}
	</section>
</article>
<CarouselScroller/>

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	.container {
		padding: 4em 4em;
		color: var(--text-color);
		font-size: 16px;
		max-width: 960px;
		position: relative;

		display: grid;
		gap: 0 50px;
		grid-template-columns: 1fr 3fr;
		grid-template-areas:
			'photo title'
			'photo tags'
			'screenshots screenshots'
			'releases releases';
		@include for-tablet-portrait-down {
			padding: 4em 1em;
			gap: 20px 40px;
			grid-template-columns: 2fr 5fr;
			grid-template-rows: 1fr 1fr;
		}
		@include for-phone-only {
			padding: 4em 1em;
			gap: 30px 30px;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr;
			grid-template-areas:
				'title'
				'tags'
				'photo'
				'screenshots'
				'releases';
		}

		section {
			margin: auto 0;
			&.title {
				grid-area: title;
				margin-left:auto;

				display: flex;
				justify-content: right;
				border-bottom: 2px solid transparent;
				border-image: linear-gradient(to left, #782dc280 0%, #3c4cb580 100%);
				border-image-slice: 1;

				.title-content {
					margin: auto 0;
					height: auto;
				}
				
				.links{
					@include for-phone-only {
						margin:auto;
					}
				}

				@include for-phone-only {
					margin-inline: auto;
				}
				@include for-iphone-se {
					flex-direction: column;
					padding-bottom: 1em;
				}
			}
			&.photo {
				grid-area: photo;

				text-align: right;
			}
			&.tags {
				grid-area: tags;

				display: flex;
				justify-content: right;
				gap: 10px;
				height: 36px;
				margin-top:0;

				@include for-phone-only {
					margin-inline: auto;
					margin-bottom: 2em;
				}
				@include for-iphone-se {
					hieght:40px;
					margin-bottom: 2em;
				}
			}
			&.screenshots {
				grid-area: screenshots;

				margin-top: 40px;
				overflow: hidden;
				height: 256px;
				border-radius: 20px;


				box-shadow:0 0 20px 0 rgba(9, 9, 9, 0.4);

				.carousel-wrapper {
					overflow-x: scroll;
					overflow-y: hidden;
				}

				.carousel {
					display: flex;
					height: 256px;
					width:max-content;
					background-color: var(--page-background-color);

					@include for-phone-only {
						height: 256px;
					}
				}

				@include for-phone-only {
					margin-top: 10px;
						height: 256px;
				}
			}
			&.releases {
				grid-area: releases;

				margin-top:4em;
				gap:2em;

				details {
					background-color: var(--card-background-color);
					border-radius: 20px;
					box-shadow: 0 0 16px 0 rgba(8, 8, 8, 0.2);
					padding:1em;
					margin:2em 0;
					gap:8px;
					display: flex;
					justify-content: space-between;

					ul {
						margin-left: 2em;
					}
					summary {
						padding:1em;
					}
				}
			}
		}
	}
	.link {
		stroke: none;
		fill: var(--text-color);
		margin: 8px 0 0 8px;
		@include for-iphone-se {
			margin-left: 4px;
		}
	}
	h1 {
		@include for-phone-only {
			font-size: 2.5rem;
		}
	}
</style>