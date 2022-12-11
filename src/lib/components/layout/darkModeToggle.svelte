<script>
	import Moon from "../../svg/moon.svelte";
	import Sun from "../../svg/sun.svelte";

	const class_dark_mode = "dark-mode";
	let nowDarkmode = class_dark_mode;

	function toggle()
	{
		nowDarkmode = document.documentElement.classList[0];
		nowDarkmode = nowDarkmode === class_dark_mode ? " " : class_dark_mode;
		document.documentElement.className = nowDarkmode;
	}
</script>


<button on:click={toggle}>
	{#if nowDarkmode === " "}
		<Moon/>
	{:else}
		<Sun/>
	{/if}
</button>



<style>
	button {
		pointer-events: all;
		border: none;
		background: none;
	}
	button:hover {
		cursor: pointer;
		transform: scale(1.1);
	}
</style>