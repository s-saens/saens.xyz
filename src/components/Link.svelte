<script>

    export let id;
    export let text;

    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute('href'));
        if (!el) return;
        el.scrollIntoView({
            behavior: 'smooth'
        });
    }
</script>

<a href={"#" + id} on:click|preventDefault={scrollIntoView}> {text} </a>


<style>
    a {
        text-decoration: none;
        color: black;
    }
</style>