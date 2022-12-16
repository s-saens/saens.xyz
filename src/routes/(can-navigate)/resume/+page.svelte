<script>
	import { fade, fly } from "svelte/transition";
	import Resume from '$lib/components/resume/resume.svelte';
</script>

<div in:fly="{{y:100, duration:1000}}" out:fade class="resume-wrapper">
	<div style="height:6em"/>
	<Resume />
</div>

<style lang="scss">
	.resume-wrapper {
		position: relative;
		padding: 1em;
		min-height: 80vh;
	}
	@media print {
		.resume-wrapper {
			padding: 0;
		}

		:global(body) {
			background: var(--card-background-color);
		}
	}
</style>
