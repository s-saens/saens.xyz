<script>
	import { fade, fly } from "svelte/transition";
    import allPrivacies from '$lib/privacies.js';
	import Footer from "../../../../lib/components/layout/footer.svelte";
	import Header from "../../../../lib/components/layout/header.svelte";
    import { page } from '$app/stores';

	const lang = $page.params.lang;
	
    let privacy = allPrivacies[lang];
</script>

<Header/>
<div in:fly="{{y:100, duration:1000}}" out:fade class="container">
	<pre id='content'>{privacy}</pre>
</div>
<Footer/>

<style>
	.container {
		padding: 10em 1em 4em 1em;
		max-width: 960px;
	}

	pre {
		white-space: pre-wrap;
	}
</style>

