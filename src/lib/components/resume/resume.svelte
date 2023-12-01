<script>
	import Contact from './contact.svelte';
	import SectionTitle from './section-title.svelte';
	import Photo from './photo.svelte';
	import Title from './title.svelte';
	import Skills from './skills.svelte';
	import Experience from './experience.svelte';
	import Prizes from './prizes.svelte';
</script>

<article class="resume">
	<section class="name-and-contact">
		<Title />
		<Contact />
	</section>
	<section class="photo">
		<Photo />
	</section>
	<section class="work">
		<SectionTitle>Experiences</SectionTitle>
		<Experience />
	</section>
	<section class="prizes">
		<SectionTitle>Prizes</SectionTitle>
		<Prizes />
	</section>
	<section class="skills">
		<SectionTitle>Skills</SectionTitle>
		<Skills />
	</section>
	<section class="education">
		<SectionTitle>Education</SectionTitle>
		<p>Jeonbuk National Univ.</p>
		<p>2019~2020</p>
		<p>4 semesters</p>
	</section>
</article>

<style lang="scss">
	.resume {
		color: var(--text-color);
		font-size: 16px;
		position: relative;
		overflow: hidden;
		max-width: 960px;
		margin: 0 auto;

		padding: 4em 1em 4em 1em;
		display: grid;

		grid-template-areas:
			'photo'
			'name'
			'work'
			'prizes'
			'skills'
			'education';

		@media (min-width: 768px), print {
			padding: 4em 4em;
			grid-template-columns: 2fr 1fr;
			gap: 20px 30px;

			grid-template-areas:
				'name photo'
				'work skills'
				'work education'
				'prizes prizes'
		}

		section {
			padding: 5px 5px 1em 5px;
			border-radius: 10px;

			&.name-and-contact {
				margin-bottom: 3em;
				grid-area: name;
				display: flex;
				flex-direction: column;
			}
			&.photo {
				grid-area: photo;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			&.work {
				grid-area: work;
				margin-bottom: 3em;
			}
			&.education {
				grid-area: education;

				p {
					text-align: left;
				}
			}
			&.skills {
				grid-area: skills;
			}
			&.prizes {
				grid-area: prizes;
			}
		}
	}

	// Print-specific styles
	@media print {
		.resume {
			box-shadow: none;
			margin: 0;
			overflow: hidden;
		}

		.prizes {
			margin-top: 6em;
		}
	}

	@page {
		padding: 0;
		margin: 0cm;
		size: A4 portrait;
	}
</style>
