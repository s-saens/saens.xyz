// Get posts info
const allPrivacies = import.meta.glob('../../../../lib/privacies/*.md', { eager: true });

let privacies = [];
let cnt = 0;
// Get the posts' slugs
for (let path in allPrivacies) {
	const privacy = allPrivacies[path];
	const slug = privacy.metadata.slug;
	const p = { privacy, slug };
	cnt++;
	privacies.push(p);
}

export function load({ params }) {
	const { slug } = params;

	// Find the post with the slug
	const filteredPrivacy = privacies.find((p) => {
		return p.slug.toLowerCase() === slug.toLowerCase();
	});

	return {
		// Tell page to load that post's module
		page: filteredPrivacy.privacy.default
	};
}
