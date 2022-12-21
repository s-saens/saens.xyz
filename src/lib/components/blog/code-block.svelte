<script>
	export let filename;
	export let lang;
</script>

<div class="code-block">
	{#if filename}
		<div class="filename">{filename}</div>
	{/if}
	{#if lang}
		<div class="lang">{lang}</div>
	{/if}
	<slot />
</div>

<style lang="scss">
	.code-block {
		user-select: all;
		display: block;
		position: relative;
		background-color: var(--code-background-color);
		color: var(--code-text-color);
		font-family: var(--mono-font);
		font-size: 1rem;
		line-height: 1.33em;
		border-radius: 8px;
		box-shadow: var(--card-shadow);

		padding: 25px 30px;
		margin: 30px 0;

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

		.lang {
			position: absolute;
			right: 0;
			top: -20px;
			background: inherit;
			border-radius: 8px;
			padding: 5px 10px;
			z-index: 2;
			font-size: 0.85em;
		}

		.filename {
			background: inherit;
			border-top-left-radius: 8px;
			border-top-right-radius: 8px;
			margin-bottom: -2px;
			padding: 7px 15px;
			border-radius: 8px;
			position: absolute;
			left: 0;
			top: -20px;
			z-index: 1;
			font-size: 0.9rem;
		}
	}
</style>
