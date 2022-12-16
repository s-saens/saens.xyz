import Prism from 'prismjs';
import 'prism-svelte';

const imports = import.meta.glob('./privacies/*.md', { eager: true });

const posts = [];

for (const path in imports) {
	const post = imports[path];
	if (post) {
		posts.push({
			...post.metadata,
			...post.default.render()
		});
	}
}

const filteredPosts = posts
	.filter((post) => !post.hidden)
	.sort((a, b) =>
		new Date(a.date).getTime() > new Date(b.date).getTime()
			? -1
			: new Date(a.date).getTime() < new Date(b.date).getTime()
			? 1
			: 0
	)
	.map((post) => {
		return {
			...post,
		};
	});

export default filteredPosts;
