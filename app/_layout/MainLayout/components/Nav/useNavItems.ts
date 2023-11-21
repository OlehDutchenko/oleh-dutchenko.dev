import { TranslationsFolder } from '@/_locales/MultiLangFolder';
import { resolveCurrentFolder } from '@/_utils/resolve-fs';
import 'server-only';
import { NavItem, NavProps } from './types';

export function useNavItems({ locale }: NavProps): NavItem[] {
	const translationsFolder = new TranslationsFolder({
		path: resolveCurrentFolder(import.meta.url),
	});
	const translations = translationsFolder.getLanguageFile(locale);
	const homepage = `/${locale}`;

	return [
		{
			key: 'homepage',
			href: homepage,
			label: translations.homepage,
		},
	];
}
