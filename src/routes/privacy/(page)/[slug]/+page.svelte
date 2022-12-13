<script>

	import Footer from "../../../../lib/components/layout/footer.svelte";
	import Header from "../../../../lib/components/layout/header.svelte";

	export let data;
	$: ({ page } = data);

</script>

<Header/>
<div class="container">
	<svelte:component this={page} />
</div>
<Footer/>

<style>
	.container {
		padding: 10em 1em 4em 1em;
		max-width: 960px;
	}
</style>

