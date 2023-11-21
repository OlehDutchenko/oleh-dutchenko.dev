import type { Translations } from '@/_layout/MainLayout/translations';
import type { LocaleName } from '@/_locales/constants';
import 'server-only';

export interface Params {
	locale: LocaleName;
	translations: Translations;
}

interface Item {
	key: string;
	href: string;
	label: string;
}

export function useNavItems(params: Params): Item[] {
	const { locale, translations } = params;
	return [
		{
			key: 'homepage',
			href: makeHref('/'),
			label: translations.homepage,
		},
		{
			key: 'inner',
			href: makeHref('/inner'),
			label: 'translations.inner',
		},
		{
			key: 'inner-2',
			href: makeHref('/inner-2'),
			label: 'translations.inner-2',
		},
	];

	function makeHref(path: string): string {
		path = path.replace(/\/$/, '');
		return `/${locale}${path}`;
	}
}
