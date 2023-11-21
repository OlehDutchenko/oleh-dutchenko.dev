import type { Translations } from '@/_layout/MainLayout/translations';
import type { Locale } from '@/_locales/constants';
import { HRefMaker } from '@/_utils/HRefMaker';
import 'server-only';

export interface Params {
	locale: Locale;
	translations: Translations;
}

interface Item {
	key: string;
	href: string;
	label: string;
}

export function useNavItems(params: Params): Item[] {
	const { locale, translations } = params;
	const href = new HRefMaker(locale);
	return [
		{
			key: 'homepage',
			href: href.make('/'),
			label: translations.homepage,
		},
		{
			key: 'inner',
			href: href.make('/inner'),
			label: 'translations.inner',
		},
		{
			key: 'inner-2',
			href: href.make('/inner-2'),
			label: 'translations.inner-2',
		},
	];
}
