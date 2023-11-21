export type Locale = 'en' | 'uk';
export type LocalesRecord<Shape = string> = Record<Locale, Shape>;

export const AVAILABLE_LOCALES: Locale[] = ['en', 'uk'];
export const DEFAULT_LOCALE: Locale = 'en';

export const STATIC_LOCALE_PARAMS: {
	locale: Locale;
}[] = AVAILABLE_LOCALES.map((locale) => {
	return { locale };
});
