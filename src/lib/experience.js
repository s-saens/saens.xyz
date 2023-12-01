const careerStart = new Date(2021, 4, 13);
export const yearsOfExperience = Math.abs(
	new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
);

export const entries = [
	{
		id: 'freelancer',
		title: 'Freelance Developer',
		jobTitle: 'Sole Proprietor from Nov 2022',
		timeframe: 'Feb 2022 ~ Now',
		location: 'Jeongeup',
		projects: [
			{
				title: 'iMaze',
				link: '/projects/iMaze',
				desc: 'Built a hyper-casual game with Unity from scratch. Automated build and deployment processes with Jenkins.'
			},
			{
				title: 'Svelte Homepage',
				link: '/',
				desc: 'Built this homepage. Overall template was made by Matt Fantinel with SvelteKit and I customized.'
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
		timeframe: 'Apr 2021 ~ Nov 2021',
		location: 'Seoul',
		projects: [
			{
				title: 'Dragon Ace Casino - Baccarat (Google Instant)',
				link: 'https://play.google.com/store/apps/details?id=com.gamespring.dac&hl=en&gl=US',
				desc: 'Built the first Google Instant version of Dragon Ace Baccarat.'
			},
			{
				title: 'Dragon Ace Casino - Slot',
				link: 'https://play.google.com/store/apps/details?id=com.gamespring.dac&hl=en&gl=US',
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
