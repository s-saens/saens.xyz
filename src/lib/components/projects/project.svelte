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
				add_style="border-radius:40px; box-shadow:0 0 40px 0 rgba(40,40,40,0.5)"
		/>
	</section>
	<section class="title">
		<h1 class="title-content">{project.title}</h1>
		<div class="title-content">
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
		gap: 0 60px;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 2fr 1fr 3fr;
		grid-template-areas:
			'photo title'
			'photo tags'
			'photo screenshots';
		@include for-tablet-portrait-down {
			padding: 4em 1em;
			gap: 0 40px;
			grid-template-columns: 3fr 5fr;
			grid-template-rows: 1fr 1fr;
			grid-template-areas:
				'photo title'
				'photo tags'
				'screenshots screenshots';
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
				'screenshots';
		}

		section {
			margin: auto 0;
			&.title {
				grid-area: title;

				display: flex;
				border-bottom: 5px solid var(--primary-color);

				.title-content {
					margin-block: auto;
					height: auto;
				}
				
				@include for-phone-only {
					margin-inline: auto;
					border: none;
				}
				@include for-iphone-se {
					flex-direction: column;
				}
			}
			&.photo {
				grid-area: photo;

				text-align: right;
			}
			&.tags {
				grid-area: tags;

				display: flex;
				gap: 10px;
				height: 40px;
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

				overflow: hidden;
				height: 140px;
				border-radius: 20px;

				box-shadow: 0 0 10px 0 rgba(10, 10, 10, 0.5);

				.carousel-wrapper {
					overflow-x: scroll;
					overflow-y: hidden;
				}

				.carousel {
					display: flex;
					height: 140px;
					width:max-content;
					background-color: var(--page-background-color);
					gap: 0 1px;

					@include for-phone-only {
						height: 240px;
					}
				}

				@include for-tablet-portrait-down {
					margin-top: 40px;
				}
				@include for-phone-only {
					margin-top: 10px;
						height: 240px;
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