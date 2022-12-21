<script>
	import { fly, fade } from "svelte/transition";
</script>

<section id="hero" in:fly="{{y:100, duration:1000}}" out:fade>
	<p class="intro">
		<span>WORK LESS</span>
		<span>PERFORM BETTER</span>
	</p>
</section>

<style lang="scss">
	@import '../../scss/breakpoints.scss';

	#hero {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
		position: relative;
		padding: 80px 0;

		@include for-phone-only {
			padding: 40px 0 50px;
		}

		.intro {
			font-family: var(--mono-font);
			font-size: 1.4rem;
			width: min(100%, 440px);
			display: flex;
			flex-direction: column;
			text-align: center;

			@include for-phone-only {
				font-size: 20px;
				text-align: center;
			}
		}
	}
</style>
