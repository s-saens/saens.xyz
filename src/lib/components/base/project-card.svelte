<script>
	import Image from '$lib/components/base/image.svelte';
	import Card from './card.svelte';

	export let project;
</script>

{#if project}
<Card url="/projects/{project.title}">
	<div slot="image">
		<!-- <Image path="projects/{project.title}" filename="cover" alt="Cover Image" /> -->
	</div>
	<div slot="content">
		<div class="title">{project.title}</div>
	</div>
</Card>
{/if}