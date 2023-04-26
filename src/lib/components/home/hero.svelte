<script>
	import { fly, fade } from "svelte/transition";

	let sayings = [
		[`The journey of a thousand miles begins with one step.`, `Lao Tzu`],
		[`Success is not final, failure is not fatal: it is the courage to continue that counts.`, `Winston Churchill`],
		[`Believe you can and you're halfway there.`, `Theodore Roosevelt`],
		[`Don't watch the clock; do what it does. Keep going.`, `Sam Levenson`],
		[`Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.`, `Albert Schweitzer`],
		[`The only way to do great work is to love what you do.`, `Steve Jobs`],
		[`You miss 100% of the shots you don't take.`, `Wayne Gretzky`],
		[`The future belongs to those who believe in the beauty of their dreams.`, `Eleanor Roosevelt`],
		[`Success is stumbling from failure to failure with no loss of enthusiasm.`, `Winston Churchill`],
		[`It always seems impossible until it's done.`, `Nelson Mandela`]
	];

	let index = Math.floor(Math.random() * sayings.length);
</script>

<section id="hero" in:fly="{{y:100, duration:1000}}" out:fade>
	<p class="intro">
		<span>{sayings[index][0]}</span>
		<br/>
		<span>- {sayings[index][1]} -</span>
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
