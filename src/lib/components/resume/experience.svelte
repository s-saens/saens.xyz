<script>
	import PinIcon from '$lib/svg/pin.svelte';
	import LowAccentHighlight from '$lib/components/style/low-accent-highlight.svelte';
	import { entries } from '$lib/experience';

	import Link from '../../svg/link.svelte';
</script>

<div class="resume-experience">
	{#each entries as entry}
		<div class="experience">
			<div class="content">
				<div class="title">
					<div>
						<span class="company-name">
							<LowAccentHighlight id={entry.id}>{entry.title}</LowAccentHighlight>
						</span>
					</div>
					<small>{entry.timeframe} | {entry.jobTitle} | <span class="icon"><PinIcon /></span> {entry.location}</small>
				</div>

				<ul>
				{#each entry.projects as project}
				<li>
					<div class="project-title">
						{project.title}
						{#if project.link != ''}
							<a href={project.link} class="project-link"><Link/></a>
						{/if}
					</div>
					
					<p class="project-desc">{project.desc}</p>
					</li>
				{/each}
				</ul>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
		.experience {
			display: flex;
			gap: 10px;

			.content {
				flex: 1;
			}

			.title {
				div {
					font-size: 18px;
					display: block;
				}

				.company-name {
					color: var(--text-color);
					font-size: 22px;
					font-family: var(--title-font);
					font-weight: 600;
				}

				.icon {
					:global(svg) {
						width: 14px;
						height: 14px;
					}
				}

				small {
					font-size: 14px;
					font-weight: 300;
					color: var(--text-light-color);
					fill: var(--text-light-color);
				}
			}

			p {
				margin-top: 10px;
				text-align: justify;
			}
		}
		.project-title {
			display: flex;
			align-items: center;
			font-weight: 500;

			a {
				margin-left: 6px;
				width: 16px;
				height: 16px;
				transition: all 0.1s ease-in-out;

				&:hover {
					transform: scale(1.1);
				}
			}
		}
		.project-desc {
			font-size: 14px;
			padding-bottom: 10px;
			margin: 0;
			font-weight: 200;
			color: var(--text-second-light-color);
		}

		ul {
			margin-left: 1em;
		}
</style>
