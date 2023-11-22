import type { Translations } from '@/_layout/MainLayout/translations';
import type { Locale } from '@/_locales/constants';
import { HRefMaker } from '@/_utils/HRefMaker';

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
			key: 'about',
			href: href.make('/about'),
			label: translations.nav.about,
		},
		{
			key: 'blog',
			href: href.make('/blog'),
			label: translations.nav.blog,
		},
		{
			key: 'envato',
			href: href.make('/envato'),
			label: translations.nav.envato,
		},
	];
}
