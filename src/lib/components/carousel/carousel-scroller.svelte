<script>
	let carousel;
	let lastX;
	let deltaX;
	let isDown = false;

	function onMouseDown(e) {
		lastX = e.screenX;
		carousel = e.srcElement.closest(".carousel-wrapper");
		if(carousel) isDown = true;
	}
	function onMouseMove(e) {
		if(!isDown) return;
		const nowX = e.screenX;
		deltaX = nowX - lastX;
		lastX = nowX;

		carousel.scrollLeft -= deltaX;
	}
	function end() {
		isDown = false;
		if(carousel) lastMove();
	}
	function lastMove() {
		if(!carousel) return;
		
		carousel.scrollLeft -= deltaX;
		const sign = Math.sign(deltaX);
		deltaX -= 0.5 * sign;

		if (deltaX != 0 && carousel) {
			requestAnimationFrame(lastMove);
		}
	}
	function nullFunc() {}
</script>

<svelte:window	on:mousedown|preventDefault={onMouseDown}
				on:mousemove={onMouseMove}
				on:mouseup={end}
				on:contextmenu={end}
				on:scroll={end}/>
