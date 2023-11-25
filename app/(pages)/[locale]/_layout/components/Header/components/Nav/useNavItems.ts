export interface Params {
	rootHref: string;
	items: {
		about: string;
		blog: string;
		envato: string;
	};
}

interface Item {
	key: string;
	href: string;
	label: string;
}

export function useNavItems(params: Params): Item[] {
	const { rootHref, items } = params;
	return [
		{
			key: 'about',
			href: `${rootHref}/about`,
			label: items.about,
		},
		{
			key: 'blog',
			href: `${rootHref}/blog`,
			label: items.blog,
		},
		{
			key: 'envato',
			href: `${rootHref}/envato`,
			label: items.envato,
		},
	];
}
