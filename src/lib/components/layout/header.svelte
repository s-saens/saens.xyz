<script>
	import Logo from "../../svg/logo.svelte";

	let navState = "on";
	var lastY = 100;
	let deltaY = 100;
	let y = 0;
	$ : {
		deltaY = lastY - y;
		lastY = y;
		navState = deltaY >= 0 ? "on" : "off";
	}

</script>

<svelte:window bind:scrollY={y}/>

<header>
	<nav class={navState}>
		<a class="logo clickable" href="/" alt="Site logo">
			<Logo/>
		</a>
		<div class="links clickable">
			<a href="https://saens.tistory.com">Blog</a>
			<a href="/projects">Projects</a>
			<a href="/resume">Resume</a>
		</div>
	</nav>
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
			transition: all 0.3s ease;
			position: fixed;
			height: 8em;
			width:100%;
			z-index: 100;
			display: flex;
			align-items: center;
			justify-content: center;
			background: var(--nav-color);
			gap: 30px;
			backdrop-filter: blur(3px);

			a {
				color: var(--text-color);
			}
			a:hover {
				text-decoration: none;
				text-shadow:  rgb(185, 185, 185) 0 0 15px;
			}


			.logo {
				font-size: 32px;
				font-weight: 900;
				.hide {
					display: none;
				}
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

		.off {
			transform: translateY(-9em);
		}
	}
</style>
