<script>

  	function goTop() {
    	document.body.scrollIntoView();
  	}	
</script>

<a class="top-button" href="" on:click={goTop}>
	<svg width="64px" height="64px" viewBox="0 0 24 24" stroke-width="0.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8.5 13L12 9.5l3.5 3.5" stroke="#000000" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#000000" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</a>

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	
	.top-button {
		z-index: 200;
		filter: drop-shadow(0 0 5px var(--page-background-color));
		position: fixed;
		right: 5em;
		bottom: 5em;

		@include for-tablet-portrait-down {
			right: 1em;
			bottom: 1em;
		}
	}
	.top-button:hover {
		text-decoration: none;
	}
</style>