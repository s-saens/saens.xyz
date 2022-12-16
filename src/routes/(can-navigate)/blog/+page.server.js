import { error } from '@sveltejs/kit';
import allPosts from '$lib/posts';

export async function load() {
	const result = Object.keys(allPosts).map((index) => {
		return allPosts[index];
	});

	if (result) {
		return {
			posts: result
		}
	}

	throw error(500, `Could not load blog posts`);
}
