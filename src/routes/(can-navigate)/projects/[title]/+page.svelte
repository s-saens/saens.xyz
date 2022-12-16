<script>
	import { fade, fly } from "svelte/transition";
    import allProjects from '$lib/projects';
	import Project from '$lib/components/projects/project.svelte';

    import { page } from '$app/stores';

    const title = $page.params.title;
    let project = allProjects.find((p)=> {
        return p.title == title;
    })
</script>

<div in:fly="{{y:100, duration:1000}}" out:fade class="wrapper">
	<div style="height:5em"/>
	<Project project={project}/>
</div>

<style>
    .wrapper {
        padding: 1em;
        min-height: 80vh;
    }
</style>