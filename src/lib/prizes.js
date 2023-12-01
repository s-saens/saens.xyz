const careerStart = new Date(2021, 4, 13);
export const yearsOfExperience = Math.abs(
	new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
);

export const entries = [
	{
		id: '1st oasis',
		title: '1st Oasis Hackathon',
		prize: 'Special prize (80$)',
		host: '오아시스해커톤대학생연합',
		organizer: '광주정보문화산업진흥원',
		time: 'Jan 2021',
		link: 'http://www.newsinjb.com/news/articleView.html?idxno=19252',
		github: 'https://github.com/Oasis-hackathon/IMF',
		desc: 'Built "같이사자," a group purchase platform web app. Responsible for design and front-end development in a three-person team.',
		tags: [
			{
				color: 'primary',
				text: 'React'
			},
		]
	},
	{
		id: '8th K',
		title: '8th K-Hackathon',
		prize: '2nd prize (1600$)',
		host: '과학기술정보통신부',
		organizer: '(사)소프트웨어교육혁신센터',
		time: 'Jun ~ Nov 2020',
		link: 'https://wz3.jbnu.ac.kr/software/3349/subview.do;jsessionid=93F4E52CF38CB8D6BE9A05F6C1A12206?enc=Zm5jdDF8QEB8JTJGYmJzJTJGc29mdHdhcmUlMkYxNjUxJTJGMTgxOTg5JTJGYXJ0Y2xWaWV3LmRvJTNG',
		github: 'https://github.com/s-saens/AR-Project',
		desc: 'Built "EXITraining," an AR fire evacuation training app using Unity. Led overall development and management of the project as a leader in a four-person team.',
		tags: [
			{
				color: 'primary',
				text: 'Unity'
			},
			{
				color: 'primary',
				text: 'AR'
			},
		]
	},
	{
		id: '7th K',
		title: '7th K-Hackathon',
		prize: '2nd prize (1600$)',
		host: '과학기술정보통신부',
		organizer: '(사)소프트웨어교육혁신센터',
		time: 'Jun ~ Nov 2019',
		link: 'https://www.jbnu.ac.kr/kor/?menuID=143&mode=view&no=4955',
		github: 'https://github.com/s-saens/ICanSpeak',
		desc: 'Built "I Can Speak," a VR presentation app using Unity. Responsible for overall development in a four-person team.',
		tags: [
			{
				color: 'primary',
				text: 'Unity'
			},
			{
				color: 'primary',
				text: 'VR'
			},
		]
	},
];
