<script>
	import { fly } from "svelte/transition";
	import DarkModeToggle from "./darkModeToggle.svelte";

	export let animated = true;

	let y = 0;
	var lastY = 100;
	let deltaY = 100;
	$ : {
		deltaY = lastY - y;
		lastY = y;
	}
</script>

<svelte:window bind:scrollY={y}/>

<header>
	{#if deltaY >= 0}
	<nav in:fly={{ y:-100, duration:500 }} out:fly={{ y:-100, duration:500 }}>
		<a class="logo clickable" href="/" alt="Site logo">
			S A E N S 
		</a>
		<div class="links clickable">
			<a href="/blog">Blog</a>
			<a href="/resume">Resume</a>
		</div>
		<div class="clickable"><DarkModeToggle/></div>
	</nav>
	{/if}
</header>

<style lang="scss">
	@import '../../scss/breakpoints.scss';

	header {
		position: relative;
		pointer-events: none;
		.clickable {
			pointer-events: all;
		}

		nav {
			padding: 1em 0;
			position: fixed;
			width:100%;
			height: 9em;
			z-index: 100;
			display: flex;
			align-items: center;
			justify-content: center;
			background: var(--nav-color);
			gap: 30px;

			a {
				color: var(--text-color);
			}
			a:hover {
				text-decoration: none;
				text-shadow:  rgba(200, 200, 200, 1) 1px 0 10px;
			}


			.logo {
				font-size: 32px;
				font-weight: 900;
			}

			.links {
				display: flex;
				align-items: center;
				gap: 30px;
				a:hover {
					transform: scale(1.04);
				}
			}

			@include for-phone-only {
				justify-content: center;
				flex-direction: column;
				gap: 15px;
			}
		}


		.empty-header {
			height: 9em;
			@include for-phone-only {
				height: 9em;
			}
		}
	}
</style>
