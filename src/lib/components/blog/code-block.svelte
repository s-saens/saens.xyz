<script>
	export let filename;
	export let lang;
</script>

<details open>
	<summary><b>{filename ? filename : "Code"}</b></summary>
	<div class="code-block">
		<div class="container">
			<!-- {#if filename}
				<div class="filename">{filename}</div>
			{/if} -->
			{#if lang}
				<div class="lang">{lang}</div>
			{/if}
		</div>
		<slot />
	</div>
</details>

<style lang="scss">
	details {
		summary {
			transition: 0.2s;
			font-size: 0.9rem;
			font-family: 'IBM Plex Mono';
			padding-block: 1em;
			b {
				padding: 0 0.25em;
			}
			:hover {
				transition: 0.2s;
				cursor: pointer;
				background-color: var(--primary-light-color);
			}
		}
	}
	.code-block {
		user-select: all;
		display: block;
		position: relative;
		background-color: var(--code-background-color);
		color: var(--code-text-color);
		font-family: var(--mono-font);
		font-size: 0.8rem;
		line-height: 1.33em;
		border-radius: 8px;
		box-shadow: var(--card-shadow);

		padding: 25px 30px;
		margin-top: 0.5em;
		margin-bottom: 2em;

		:global(pre) {
			overflow-x: auto;
			scrollbar-color: var(--primary-color) var(--scrollbar-track-color);
			scrollbar-width: auto;
			padding-bottom: 5px;

			&::-webkit-scrollbar {
				height: 10px;
				padding:0;
			}
			&::-webkit-scrollbar-thumb {
				background: var(--primary-color);
				&:hover {
					background: var(--primary-light-color);
				}
			}
		}

		.container {
			display: flex;
			position: absolute;
			right: 0;
			top: -15px;
			width: auto;
			background: inherit;
			border-radius: 8px 8px 0 0;
			padding: 8px 15px;
			z-index: 2;
			font-size: 0.9em;
			gap: 0.7rem;
		}
	}
</style>
