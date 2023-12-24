export type Locale = 'en' | 'uk';
export type LocalesRecord<Shape = string> = Record<Locale, Shape>;

export const AVAILABLE_LOCALES: Locale[] = ['en', 'uk'];
export const DEFAULT_LOCALE: Locale = 'en';

export type LocaleParam = { locale: Locale };
export const STATIC_LOCALE_PARAMS: LocaleParam[] = AVAILABLE_LOCALES.map(
	(locale) => {
		return { locale };
	}
);

export function generateStaticParams(): LocaleParam[] {
	return STATIC_LOCALE_PARAMS;
}
