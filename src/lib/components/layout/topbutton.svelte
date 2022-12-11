<script>

  	function goTop() {
    	document.body.scrollIntoView();
  	}	
</script>

<button class="top-button" on:click={goTop}>
	<svg width="48px" height="48px" viewBox="0 0 24 24" stroke-width="0.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 13L12 9.5l3.5 3.5" strokestroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</button>

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	
	.top-button {
		z-index: 200;
		background: none;
		border: none;
	}
	.top-button:hover {
		cursor: pointer;
		transform: scale(1.1);
	}
</style>