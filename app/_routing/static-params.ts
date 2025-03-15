import { LOCALES } from '@/_i18n/locale';

export function generateStaticParams() {
	return LOCALES.map((locale) => ({ locale }));
}
