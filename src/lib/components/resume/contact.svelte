<script>
	import GitHubIcon from '$lib/svg/socials/github.svelte';
	import EmailIcon from '$lib/svg/socials/email.svelte';
	import PinIcon from '$lib/svg/pin.svelte';
	import ChatIcon from '$lib/svg/chat.svelte';
	import InternetIcon from '$lib/svg/internet.svelte';
	import ExperienceIcon from '$lib/svg/experience.svelte';
	import StarIcon from '$lib/svg/star.svelte';
	import { yearsOfExperience } from '$lib/experience';

	function calcYearsSince(date) {
		const birthday = new Date(date);
		const ageDifMs = Date.now() - birthday.getTime();
		const ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
</script>

<ul class="resume-contact">
	<li class="birthday">
		<span class="icon"><StarIcon /></span>
		<span>{calcYearsSince('1999-05-26')} years old</span>
	</li>
	<li class="experience">
		<span class="icon"><ExperienceIcon /></span>
		<span>
			{yearsOfExperience} years of experience
		</span>
	</li>
	<li class="location">
		<span class="icon"><PinIcon /></span>
		<span>Korea</span>
	</li>
	<li class="email">
		<span class="icon"><EmailIcon /></span>
		<a href="mailto:songsh5775@gmail.com">songsh5775@gmail.com</a>
	</li>
	<li class="github">
		<span class="icon"><GitHubIcon /></span>
		<a href="https://github.com/s-saens" target="_blank"> GitHub </a>
	</li>
	<li class="languages">
		<span class="icon"><ChatIcon /></span>
		<span>English, Korean</span>
	</li>
</ul>

<style lang="scss">
	.resume-contact {
		list-style: none;
		padding: 0;
		margin-left: auto;
		margin-right: auto;

		display: grid;
		grid-gap: 10px;
		grid-template-columns: 1fr 1fr;

		grid-template-areas:
			'email email'
			'website website'
			'location languages'
			'birthday experience'
			'github linkedin';

		li {
			display: flex;
			align-items: center;
			margin: 0;

			.icon {
				margin-right: 10px;
				color: var(--primary-color);
				:global(svg) {
					width: 24px;
					height: 24px;
				}
			}

			a {
				text-decoration: none;
				color: var(--text-color);
				border-bottom: 1px dotted var(--primary-color);
				padding-bottom: 2px;

				&:hover {
					color: var(--primary-color);
					border-bottom-style: solid;
				}
			}

			&.birthday {
				grid-area: birthday;
			}
			&.location {
				grid-area: location;
			}
			&.experience {
				grid-area: experience;
			}
			&.email {
				grid-area: email;
				margin: 0 auto;
			}
			&.linkedin {
				grid-area: linkedin;
			}
			&.website {
				grid-area: website;
				display: none;
			}
			&.github {
				grid-area: github;
			}
			&.languages {
				grid-area: languages;
			}
		}

		@media (min-width: 768px), print {
			margin-left: 0;
			margin-right: 0;

			grid-gap: 5px;
			grid-template-columns: 1fr 1fr;

			grid-template-areas:
				'location languages'
				'birthday experience'
				'github email';

			li {
				&.email {
					margin: 0;
				}
				&.website {
					display: flex;
				}
			}
		}

		// Print-specific styles
		@media print {
			grid-template-areas:
				'location languages'
				'birthday email'
				'experience website';

			.linkedin,
			.github {
				display: none;
			}

			a {
				border: none !important;
			}
		}
	}
</style>
