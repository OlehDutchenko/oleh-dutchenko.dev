export type LocaleName = 'en' | 'uk';
export type LocalesRecord<Shape = string> = Record<LocaleName, Shape>;

export const AVAILABLE_LOCALES: LocaleName[] = ['en', 'uk'];
export const DEFAULT_LOCALE: LocaleName = 'en';

export const STATIC_LOCALE_PARAMS: {
	locale: LocaleName;
}[] = AVAILABLE_LOCALES.map((locale) => {
	return { locale };
});
