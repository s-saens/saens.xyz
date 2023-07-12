const careerStart = new Date(2021, 4, 13);
export const yearsOfExperience = Math.abs(
	new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
);

export const entries = [
	{
		id: 'freelancer',
		title: 'Freelancer',
		jobTitle: 'Free Developer',
		timeframe: '2022 → Now',
		current: true,
		location: 'Home',
		projects: [
			{
				title: 'iMaze',
				link: '/projects/iMaze',
				desc: 'Built a hyper-casual game with Unity from scratch. Automated build and deployment processes with Jenkins.'
			},
			{
				title: 'Svelte Homepage',
				desc: 'Built this homepage. Overall template is made by Matt Fantinel with SvelteKit and I customized.'
			}
		],
		tags: [
			{
				color: 'primary',
				text: 'Unity'
			},
			{
				color: 'primary',
				text: 'Jenkins'
			}
		]
	},
	{
		id: 'gamespring',
		title: 'GameSpring',
		jobTitle: 'Unity Client Programmer',
		timeframe: '2021 → 2022',
		location: 'Seoul',
		projects: [
			{
				title: 'Dragon Ace Casino - Baccarat (Google Instant)',
				link: '',
				desc: 'Built the first Google Instant version of Dragon Ace Baccarat.'
			},
			{
				title: 'Dragon Ace Casino - Slot',
				link: '',
				desc: 'Built the first and second versions of Slot games in Dragon Ace Casino.'
			}
		],
		tags: [
			{
				color: 'primary',
				text: 'Unity'
			},
			{
				color: 'primary',
				text: 'Jenkins'
			}
		]
	}
];
