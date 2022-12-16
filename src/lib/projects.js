const entries = [
	{
		title: 'iMaze',
		prefix: 'Hyper-casual',
		category: 'Mobile Game',
		start: 2022-2-20,
		links: [
			'https://play.google.com/store/apps/details?id=com.saens.MazeR',
			'https://apps.apple.com/us/app/imaze/id6443496386',
			'dummy_link'
		],
		desc: `
			Players should make a ball escape mazes that will be generated randomly.
		`,
		screenshots: [
			'1',
			'2',
			'3',
			'1'
		],
		releases: [
			{
				version: '1.000',
				date: '2022.10.14',
				changes: [
					'Initial version',
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
				version: '1.02X',
				date: '2023 summer',
				changes: [
					'Server will be run',
					'Cloud saving system (with MySQL and Go Server)',
					'Ranking system (with Redis)'
				]
			}
		],
		tags: [
			'Unity',
			'Jenkins',
		]
	},
	{
		title: 'Blog',
		prefix: '',
		category: 'Web',
		start: 2022-12-8,
		links: [
			'https://saens.xyz'
		],
		desc: `
			Blog for posting my works or thoughts.
		`,
		images: {
			cover: '',
			screenshots: [
				'',
				''
			]
		},
		releases: [
		],
		tags: [
			'Svelte',
		]
	},
	// {
	// 	title: 'Ilarm',
	// 	prefix: 'Life-style',
	// 	category: 'Mobile Application',
	// 	start: 2023-2-10,
	// 	links: {
	// 		'Android': '',
	// 		'iOS': ''
	// 	},
	// 	stack: [
	// 		'Flutter',
	// 		'Redis'
	// 	]
	// }
];

export default entries;