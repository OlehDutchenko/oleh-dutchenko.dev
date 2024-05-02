export interface Params {
	rootHref: string;
	items: {
		// talks: string;
	};
}

type ItemKey = keyof Params['items'];

interface Item {
	key: string;
	props: {
		href: string;
		label: string;
	};
}

export function useNavItems(params: Params): Item[] {
	const { rootHref, items } = params;
	const keys: ItemKey[] = [];

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
