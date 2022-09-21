<script>
	import Link from './Link.svelte';
	import MediaQuery from './../environment/MediaQuery.svelte';
	import { fade, fly, scale } from "svelte/transition";

    let links = [["greet","인사말"], ["intro", "센터소개"], ["program","사진"], ["map","오시는길"], ["qna","문의"]];

    const sections = document.getElementsByClassName('section');
    let current = "greet";
    let y = 0;
    $: {
        Array.from(sections).forEach(function(el, i, arr){
            var top = el.offsetTop - window.innerHeight/2;
            var bot = el.offsetTop + el.offsetHeight + window.innerHeight/2;

            if(top <= y && y < bot) current = links[i][0];
        });
    }

    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute('href'));
        if (!el) return;
        el.scrollIntoView({
            behavior: 'smooth'
        });
    }
</script>

<svelte:window bind:scrollY={y}/>

<header in:fly="{{ y: 10, duration: 100 }}" out:fade>
    <MediaQuery query="(min-width: 813px)" let:matches>
        {#if matches}
        <h1>열린주야간노인복지센터</h1>
        {/if}
    </MediaQuery>

    <nav>
        <ul>
            {#each links as l}
            <li class:selected="{current===l[0]}"><Link id={l[0]} text={l[1]}/>
                {#if current === l[0]}
                <div class="selection" in:scale out:scale></div>
                {/if}
            </li>
            {/each}
        </ul>
    </nav>
    
</header>

<style>
	header {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        width: 100%;
        height: 6em;
        z-index: 100;
        margin:0;
        padding:0;

        background-color: rgba(255, 255, 255, 1);
	}

    h1 {
        display: inline-block;
        padding: 1em 1em 0.8em 1em;
    }

    nav {
        display: inline-block;
        width: auto;
    }

    ul {
        padding: 0;
    }

    li {
        display: inline-block;
        padding: 2.6em 1em 0 1em;
        list-style-type: none;
        transition: 0.3s;
    }

    @media (hover: hover) {
        li:hover {
            font-weight: 900;
        }
    }

    .selection {
        background-color: black;
        width: 100%;
        margin-top: 1.7em;
        height: 7px;
    }

	@media (max-width: 812) {
        header {
            display: flex;
            align-items: bottom;
            justify-content: center;
            position: fixed;
            width: 100%;
            height: 5em;

            background-color: rgba(255, 255, 255, 1);
        }
        li {
            display: inline-block;
            padding: 2.1em 1em 0 1em;
            list-style-type: none;
            transition: 0.3s;
        }
        .selection {
            background-color: black;
            width: 100%;
            margin-top: 1.3em;
            height: 5px;
        }
	}

</style>