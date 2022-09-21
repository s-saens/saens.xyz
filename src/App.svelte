<script>
	import Intro from './sections/Intro.svelte';
	import Map from './sections/Map.svelte';
	import Greet from './sections/Greet.svelte';
	import Navbar from './components/Navbar.svelte';
	import Qna from './sections/Qna.svelte';
	import Pictures from './sections/Pictures.svelte';

	let sizeY = 3000;
</script>


<main>
	<Navbar ></Navbar>
	<div class="section" id="greet"> <Greet/> </div>
	<div class="section" id="intro"> <Intro/> </div>
	<div class="section" id="program"> <Pictures/> </div>
	<div class="section" id="map"> <Map/> </div>
	<div class="section" id="qna"> <Qna/> </div>
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

	#program {
		height: auto;
	}
	#intro {
		height: auto;
	}

	@media (max-width: 683px) {
		.section{
			height: 100vh;
			margin: 0;
		}
	}

</style>