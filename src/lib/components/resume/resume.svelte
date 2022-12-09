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
	<section class="about">
		<SectionTitle>About</SectionTitle>
		<p>
			I like money, and hate work. I want <b>more money, less work.</b>
			This would not be a stupid idea with <b>continuous endeavour</b> to improve my technical abilities.
		</p>
	</section>
	<section class="work">
		<SectionTitle>Professional Experience</SectionTitle>
		<Experience />
	</section>
	<section class="education">
		<SectionTitle>Education</SectionTitle>
		<p>
			Graduated as a{' '}
			<b>Technologist in System Analysis and Development</b> at{' '}
			<i>Centro Universitário da Serra Gaúcha</i>, 2018.
		</p>
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

		display: grid;
		gap: 20px 30px;
		grid-template-columns: 1fr;
		grid-template-areas:
			'photo'
			'name'
			'about'
			'skills'
			'work'
			'education';

		@media (min-width: 768px), print {
			padding: 30px 20px;
			grid-template-columns: 2fr 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr;

			grid-template-areas:
				'name photo'
				'work about'
				'work skills'
				'work education';
		}

		@media (min-width: 900px), print {
			margin: 20px auto;
			max-width: 210mm;
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
			&.about {
				grid-area: about;

				p {
					text-align: justify;
				}
			}
			&.work {
				grid-area: work;
			}
			&.education {
				grid-area: education;

				p {
					text-align: justify;
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
