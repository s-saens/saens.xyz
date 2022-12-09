const careerStart = new Date(2021, 4, 13);
export const yearsOfExperience = Math.abs(
	new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
);

export const entries = [
	{
		id: 'freelancer',
		title: 'Freelancer',
		jobTitle: 'Game & Web Developer',
		timeframe: '2022 → Now',
	  current: true,
	  location: 'Home',
		description:
			`"iMaze" from scratch. Used Unity for client, and Go-lang for server, Jenkins for auto build & deployment.
			`,
		tags: [
			{
				color: 'primary',
				text: 'Unity'
			},
			{
				color: 'primary',
				text: 'Jenkins'
			},
			{
				color: 'primary',
				text: 'Go'
			},
		]
	},
	{
		id: 'gamespring',
		title: 'GameSpring',
		jobTitle: 'Unity Client Programmer',
		timeframe: '2021 → 2022',
		location: 'Seoul',
		description:
			[
				`The first Google Instance version of "Dragon Ace Casino - Baccarat" from nothing`,
				`Buil`
			],
		tags: [
			{
				color: 'primary',
				text: 'Unity'
			}
		]
	}
];
