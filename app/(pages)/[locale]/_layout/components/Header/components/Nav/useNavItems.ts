import type { ItemProps } from './components/Item';

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
	props: ItemProps;
}

export function useNavItems(params: Params): Item[] {
	const { rootHref, items } = params;
	return [
		{
			key: 'about',
			props: {
				href: `${rootHref}/about`,
				label: items.about,
			},
		},
		{
			key: 'blog',
			props: {
				href: `${rootHref}/blog`,
				label: items.blog,
			},
		},
		{
			key: 'envato',
			props: {
				href: `${rootHref}/envato`,
				label: items.envato,
			},
		},
	];
}
