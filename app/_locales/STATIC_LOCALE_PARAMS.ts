import { AVAILABLE_LOCALES } from './LOCALES';
import { LocaleName } from './types';

type LocaleParam = { locale: LocaleName };

export const STATIC_LOCALE_PARAMS: LocaleParam[] = AVAILABLE_LOCALES.map((locale) => {
	return { locale };
});
