<script>
	import Hero from '$lib/components/home/hero.svelte';
	import { fade, fly } from "svelte/transition";

	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';

	export let data;
	let { posts } = data;
</script>

<Header />

<div in:fly="{{y:100, duration:1000}}" out:fade class="container">
	<Hero />
</div>

<Footer />