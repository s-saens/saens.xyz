<script>
	import Github from './../../svg/socials/github.svelte';
	import LowAccentHighlight from '$lib/components/style/low-accent-highlight.svelte';
	import { entries } from '$lib/prizes';

	import Link from '../../svg/link.svelte';
</script>

<div class="resume-experience">
	{#each entries as entry}
		<div class="experience">
			<div class="content">
				<div class="title">
					<span class="company-name">
						<LowAccentHighlight id={entry.id}>{entry.title}</LowAccentHighlight>
					</span>

					<span class="links">
						<a href={entry.link}><Link/></a>
						<a href={entry.github}><Github/></a>
					</span>
				</div>

				<div class="info">
					<div class="info-item"><div class="tag">PRIZE</div>{entry.prize}</div>
					<div class="info-item"><div class="tag">DATE</div>{entry.time}</div>
					<div class="info-item"><div class="tag">HOST</div>{entry.host}</div>
					<div class="info-item"><div class="tag">ORGANIZER</div>{entry.organizer}</div>
				</div>

				<div class="divider"/>
				<p class="project-desc">{entry.desc}</p>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.resume-experience {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
		grid-gap: 20px;
		margin: 20px 0;
	}

	.experience {
		display: flex;
		gap: 10px;
		border: 1px solid var(--text-light-color);
		border-radius: 30px;
		padding: 1.5em;

		.content {
			flex: 1;
		}

		.info {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
			grid-gap: 20px;
			flex-direction: column;

			gap: 10px;
			font-size: 14px;
			font-weight: 300;
			color: var(--text-light-color);
			fill: var(--text-light-color);
			margin: 5px 5px 5px 0;
			
			.tag {
				width: 80px;
				text-align: center;
				border: 1px solid var(--text-light-color);
				color: var(--text-light-color);
				border-radius: 1em;
				display: inline-block;
				font-size: 0.75em;
				line-height: 2em;
				margin-right: 0.7em;
				padding: 0, 0.5em;
				text-decoration: none;
				white-space: nowrap;
			}

			.info-item {
				display: flex;
				align-items: center;
				gap: 10px;
			}
		}

		.title {
			display: block;
			text-align: center;

			.company-name {
				color: var(--text-color);
				font-size: 22px;
				font-family: var(--title-font);
				font-weight: 600;
			}

			.links {
				padding: 10px 10px 20px 10px;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 10px;

				a {
					width: 20px;
					height: 20px;
					transition: all 0.1s ease-in-out;

					&:hover {
						transform: scale(1.1);
					}
				}
			}
		}

		p {
			margin-top: 10px;
			text-align: justify;
		}
	}
	
	.project-desc {
		font-size: 14px;
		padding-bottom: 10px;
		margin: 0;
		font-weight: 200;
		color: var(--text-second-light-color);
	}

	
	.divider {
		border-bottom: 1px solid var(--text-light-color);
		margin: 20px 0;
	}


	@media print {
		.resume-experience {
			grid-template-columns: 1fr 1fr;
			grid-gap: 20px;
			margin: 50px 0;
		}
	}
</style>
