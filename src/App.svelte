<script>
	import Splash from './sections/1_Splash.svelte';
	import Intro from './sections/2_Introduce.svelte';
	import Contact from './sections/3_Contact.svelte';

	let sizeY = 3000;
</script>


<main>
	<div class="section" id="splash"> <Splash/> </div>
	<div class="section" id="intro"> <Intro/> </div>
	<div class="section" id="contact"> <Contact/> </div>
</main>

<style>
	main {
		text-align: center;
		margin: 0;
		padding: 0;
	}

	.section{
		height: 100vh;
		margin: 0;
		padding: 0;
	}

	#intro {
		height: auto;
	}

</style>