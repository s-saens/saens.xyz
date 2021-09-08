<script>
	import { expoOut, linear, quintOut } from 'svelte/easing';
	import { fade, draw, fly } from 'svelte/transition';
	import { characters } from './shape.js';

	let visible = true;
</script>

{#if visible}
	<svg xmlns="http://www.w3.org/2000/svg" width=700>
		<g out:fade="{{duration: 200}}" opacity=1 style="float:left">
			{#each characters as String, i}
				<path
					in:draw="{{duration: 500, delay:700*i, easing: linear}}"
					style="stroke: black; stroke-width: 10;"
					d={characters[i]}
				/>
			{/each}
		</g>
	</svg>
{/if}

<label>
	<input type="checkbox" bind:checked={visible}>
	toggle me
</label>

<link href="https://fonts.googleapis.com/css?family=Overpass:100,400" rel="stylesheet">

<style>
	svg {
		width: 100%;
		height: 100%;
	}

	path {
		fill: transparent;
		opacity: 1;
	}

	label {
		position: absolute;
		top: 1em;
		left: 1em;
	}

	.centered {
		font-size: 20vw;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		font-family: 'Overpass';
		letter-spacing: 0.12em;
		color: #676778;
		font-weight: 400;
	}

	.centered span {
		will-change: filter;
	}
</style>