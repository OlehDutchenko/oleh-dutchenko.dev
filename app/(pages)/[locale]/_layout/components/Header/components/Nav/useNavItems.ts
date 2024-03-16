import type { Props as ItemProps } from './components/Item';

export interface Params {
	rootHref: string;
	items: {
		talks: string;
	};
}

type ItemKey = keyof Params['items'];

interface Item {
	key: string;
	props: ItemProps;
}

export function useNavItems(params: Params): Item[] {
	const { rootHref, items } = params;
	const keys: ItemKey[] = ['talks'];

	return keys.map(
		(key): Item => ({
			key,
			props: {
				href: `${rootHref}/${key}`,
				label: items[key],
			},
		})
	);
}
