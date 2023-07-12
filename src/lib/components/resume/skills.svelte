<ul class="resume-skills">
	<li>
		Strong at...
		<div class="tags-container">
			<span class="tag">Unity</span>
			<span class="tag">C#</span>
			<span class="tag">C++</span>
			<span class="tag">Firebase</span>
			<span class="tag">Algorithm</span>
		</div>
	</li>
	<li>
		Now immersed in...
		<div class="tags-container">
			<span class="tag secondary">Flutter</span>
			<span class="tag secondary">Go</span>
		</div>
	</li>
	<li>
		Little bit of...
		<div class="tags-container">
			<span class="tag third">Jenkins</span>
			<span class="tag third">Javascript</span>
			<span class="tag third">Java</span>
			<span class="tag third">Svelte</span>
			<span class="tag third">Flutter</span>
		</div>
	</li>
</ul>

<style lang="scss">
	.resume-skills {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.tags-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		margin: 2px 0 5px;
	}

	.tag {
		background-color: var(--primary-lightest-color);
		border: 1px solid var(--primary-color);
		color: var(--primary-color);
		border-radius: 0.25em;
		display: inline-block;
		font-size: 0.75em;
		line-height: 2em;
		margin: 0.125em;
		padding: 0 0.5em;
		text-decoration: none;
		white-space: nowrap;

		&.secondary {
			background-color: var(--secondary-lightest-color);
			border: 1px solid var(--secondary-color);
			color: var(--secondary-color);
		}
		&.third {
			background-color: var(--background-color);
			border: 1px solid var(--text-light-color);
			color: var(--text-light-color);
		}
	}
</style>
