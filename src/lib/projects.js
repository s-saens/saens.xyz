const entries = [
	{
		title: 'iMaze',
		prefix: 'Hyper-casual',
		category: 'Mobile Game',
		start: 2022-2-20,
		links: [
			'https://play.google.com/store/apps/details?id=com.saens.MazeR',
			'https://apps.apple.com/us/app/imaze/id6443496386',
		],
		desc: `
			Hyper-casual maze escaping game.
		`,
		screenshots: [
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
		],
		releases: [
			{
				version: '1.091',
				date: '2023.6.1',
				changes: [
					'Coin and skin system added.',
					'From now on, the difficulty will change, but the seasons will not be updated.',
					'Increased acceleration and reduced slipping.',
					'Fixed intermittent frame rate drops.',
					'Fixed the issue where the ranking UI was not updating properly.',
					'Fixed the issue where logged-in user\'s data is reset when reinstalling the app.'
				]
			},
			{
				version: '1.064',
				date: '2023.4.6',
				changes: [
					'Google Play Games, Apple login',
					'Ranking system',
					'Cloud Saving system',
				]
			},
			{
				version: '1.042',
				date: '2023.3.2',
				changes: [
					'Score system applied',
					'Blackhole issue fix',
					`Modify in starting from a certain floor.`,
					'UI update.',
				]
			},
			{
				version: '1.020',
				date: '2023.1.20',
				changes: [
					'New obstacles are added!',
					'Season system is applied',
					'Modify in invincibility logic',
					'Countdown appears when you close menu in game.',
					'Obstacle sound effects now adopt spatial blend features.',
					'Minor UI changes.',
					'Harder than before.',
				]
			},
			{
				version: '1.010',
				date: '2022.12.9',
				changes: [
					'Overall changes on graphics/sound assets',
					'Changes on physical traits',
					'Revival issue fixed',
					'Camera fixing feature',
				]
			},
			{
				version: '1.000',
				date: '2022.10.14',
				changes: [
					'Initial version',
				]
			},
		],
		tags: [
			'Unity',
			'Jenkins',
		]
	},
];

export default entries;