<script>
	import FooterWave from '$lib/svg/footer-wave.svelte';
	import Socials from '$lib/components/base/socials.svelte';

	let currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="content">
		<div class="copyright">
			© {currentYear} SAENS, in Korea
		</div>
		<div class="credits">
			Powered by
				<a href="https://kit.svelte.dev/" target="_blank" rel="noopener">SvelteKit</a>
			and
				<a href="https://github.com/matfantinel/matfantinel.github.io" target="_blank" rel="noopener">Matt Fantinel's project</a>.
			<br/>
			Icons by
				<a href="https://iconoir.com/" target="_blank" rel="noopener">Iconoir</a>. 
				Privacy policy <a href="/privacy/en">here</a>
		</div>
		<div class="socials">
			<Socials />
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		height: 16em;
		width: 100%;
		padding: 4.5em 1em 1em 1em;
		// background: var(--footer-background);
		display: grid;
		grid-template-rows: 120px 1fr;

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 15px;
			font-weight: 600;
			text-align: center;

			.credits {
				font-weight: 400;
				font-size: 90%;
				color: var(--text-light-color);
			}
		}
	}
</style>
