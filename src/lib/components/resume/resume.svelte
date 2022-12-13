<script>
	import Contact from './contact.svelte';
	import SectionTitle from './section-title.svelte';
	import Photo from './photo.svelte';
	import Title from './title.svelte';
	import Skills from './skills.svelte';
	import Experience from './experience.svelte';
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
		<SectionTitle>Professional Experiences</SectionTitle>
		<Experience />
	</section>
	<section class="education">
		<SectionTitle>Education</SectionTitle>
		<p>Jeonbuk National Univ.</p>
		<p>2019~2020</p>
		<p>4 semesters</p>
	</section>
	<section class="skills">
		<SectionTitle>Skills</SectionTitle>
		<Skills />
	</section>
</article>

<style lang="scss">
	.resume {
		padding: 4em 1em 4em 1em;
		color: var(--text-color);
		font-size: 16px;
		position: relative;
		overflow: hidden;
		max-width: 960px;
		margin: 0 auto;

		display: grid;
		gap: 20px 30px;
		grid-template-columns: 1fr;
		grid-template-areas:
			'photo'
			'name'
			'skills'
			'work'
			'education';

		@media (min-width: 768px), print {
			padding: 4em 4em;
			grid-template-columns: 2fr 1fr;
			grid-template-rows: 2fr 2fr 1fr;

			grid-template-areas:
				'name photo'
				'work skills'
				'work education'
		}

		section {
			padding: 5px;
			// margin: 10px;
			border-radius: 10px;

			&.name-and-contact {
				grid-area: name;
				display: flex;
				flex-direction: column;
				// justify-content: space-between;
			}
			&.photo {
				grid-area: photo;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			&.work {
				grid-area: work;
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
		}
	}

	// Print-specific styles
	@media print {
		.resume {
			box-shadow: none;
			margin: 0;
			padding: 10px 10px;
			max-height: 287mm;
			overflow: hidden;

			section {
				margin: 0;
			}
		}
	}

	@page {
		padding: 0;
		margin: 0cm;
		size: A4 portrait;
	}
</style>
