import type { ItemProps } from './components/Item';

export interface Params {
	rootHref: string;
	items: {
		about: string;
		talks: string;
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
			key: 'talks',
			props: {
				href: `${rootHref}/talks`,
				label: items.talks,
			},
		},
	];
}
