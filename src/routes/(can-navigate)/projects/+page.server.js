// Projects List Page Script

import { error } from '@sveltejs/kit';
import allProjects from '$lib/projects';

export async function load() {
	const result = Object.keys(allProjects).map((index) => {
		return allProjects[index];
	});

	if (result) {
		return {
			projects: result
		}
	}

	throw error(500, `Could not load`);
}
