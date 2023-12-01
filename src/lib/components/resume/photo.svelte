<picture class="resume-photo">
	<source srcset="/images/resume-avatar-dark.png" media="(prefers-color-scheme: dark)" />
	<img src="/images/resume-avatar.png" alt="YEAH" />
</picture>

<style lang="scss">
	.resume-photo {
		img {
			border-radius: 50%;
			box-shadow: 0px 4px 10px 8px rgb(0 0 0 / 10%);
			max-width: 100%;
			max-height: 200px;
			box-sizing: border-box;
		}
	}


	// Print-specific styles
	@media print {
		.resume-photo {
			img {
				box-shadow: none;
			}
		}
	}
</style>
