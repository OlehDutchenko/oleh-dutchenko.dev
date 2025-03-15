export type Locale = 'uk' | 'en';

export const LOCALES: Readonly<Locale[]> = ['uk', 'en'];
export const DEFAULT_LOCALE: Readonly<Locale> = 'uk';

export function isLocale(locale: string): locale is Locale {
	const locales: Readonly<string[]> = LOCALES;
	return locales.includes(locale);
}
