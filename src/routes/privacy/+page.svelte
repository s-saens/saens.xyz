<script>
	import { fade, fly } from 'svelte/transition';
	import Footer from '../../lib/components/layout/footer.svelte';
	import Header from '../../lib/components/layout/header.svelte';

    import allPrivacies from '$lib/privacies.js';

    let langList = Object.keys(allPrivacies);
    
    const langMap = {
        ko: '한국어',
        en: 'English',
    };
    
</script>

<Header/>


<div in:fly="{{y:100, duration:1000}}" out:fade class="wrapper">
    <ul>
        {#each langList as lang}
            <a href="/privacy/{lang}"><li class ="button">{langMap[lang]}</li></a>
        {/each}
    </ul>
</div>

<Footer/>


<style>

	.wrapper {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
        align-items: center;
	}

    .button {
        padding: 1em;
        background-color: var(--card-background-color);
        max-width: 500px;
    }

    ul {
        list-style-type: none;
    }

    a {
        color: var(--text-color);
    }
</style>

