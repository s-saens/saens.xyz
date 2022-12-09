<script>
	import Moon from "../../svg/moon.svelte";
	import Sun from "../../svg/sun.svelte";

	let nowDarkmode = 1;

	function toggle() {
		if(document != undefined){
			var st = require('../../scss/themes.scss');
			var value = document.documentElement.style.getPropertyValue("--darkmode");
			console.log(value);
			st.setProperty("--darkmode", value * -1);
		}
	}
</script>


<a href="" on:click={toggle}>
	{#if nowDarkmode}<Sun/>
	{:else}<Moon/>
	{/if}
</a>