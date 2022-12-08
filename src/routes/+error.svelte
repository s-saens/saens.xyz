<div class="error-page">
	<div class="container">
		<h1>ERROR</h1>
		<p>SOMETHING WENT WRONG!</p>
		<a class="button secondary" href="/">Go Home</a>
	</div>
</div>

<style lang="scss">
	.error-page {
		background: var(--page-background-color);
		position: relative;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		text-align: center;

		.button {
			margin-top: 30px;
			width: fit-content;
		}
	}
</style>
