<script>
	import { title } from '$lib/meta';
	import { fade, fly } from "svelte/transition";
	import Resume from '$lib/components/resume/resume.svelte';
</script>

<svelte:head>
	<title>Resume - {title}</title>
	<meta property="og:title" content="Resume - {title}" />
	<meta name="twitter:title" content="Resume - {title}" />
</svelte:head>

<div in:fly="{{y:100, duration:1000}}" out:fade class="resume-wrapper">
	<div style="height:6em"/>
	<Resume />
</div>

<style lang="scss">
	.resume-wrapper {
		position: relative;
		padding: 2em 0 2em;
		min-height: 80vh;

		.download-link {
			position: absolute;
			top: -5px;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 5px;
			margin: 0 auto;
			width: fit-content;
			z-index: 1;

			:global(svg) {
				width: 20px;
				height: 20px;
				color: inherit;
			}
		}
	}
	@media print {
		.resume-wrapper {
			padding: 0;

			.download-link {
				display: none !important;
			}
		}

		:global(body) {
			background: var(--card-background-color);
		}
	}
</style>
