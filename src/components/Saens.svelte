<script>
	import { linear } from 'svelte/easing';
	import { draw } from 'svelte/transition';
	import { characters } from 'shape.js';

	let visible = false;
	let size = 1;

	function setVisible()
	{
		visible = true;
	}
</script>

<label >     
	<input type="checkbox" bind:checked={visible}>
	    toggle me
 </label>
 
{#if visible}
	<div class="container">
		{#each characters as String, i}
		<div class="single" >
			<svg width="200" height="300">
				<path
					in:draw="{{duration: 300, delay: 300*i, easing: linear}}"
					d={characters[i]}
				/>
			</svg>
		</div>
		{/each}
	</div>
{:else}
	<body on:pointerenter={setVisible}></body>
{/if}

<style>
	.container {
		display: flex;
		overflow:visible;
		height: auto;
	}
	.single {
		padding:3rem;
		overflow: visible;
		height: auto;
		align-items: center;
		border: black;
	}
	svg {
		transform: scale(1);
		width: auto;
		height: auto;
		transition: 0.2s;
		transition-duration: 2;
		border:black;
	}
	svg:hover
	{
		transform: scale(1.2);
		transition: 0.2s;
	}
	path {
		fill: transparent;
		opacity: 1;
		stroke-linejoin:bevel;

		stroke: black;
		stroke-width: 15;
		transition: 0.2s;

		filter: drop-shadow(0, 0, 0, 0.5);
	}
	svg:active:hover > path
	{
		stroke: mediumslateblue;
		stroke-width: 20;
		transition: 0.2s;
	}

</style>