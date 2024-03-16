import { Locale, LocalesRecord } from '@/_locales';
import 'server-only';
import type { EN } from './en';
import type { UK } from './uk';

export type Translations = EN | UK;

const translations: LocalesRecord<() => Promise<Translations>> = {
	en: () => import('./en').then((module) => module.default),
	uk: () => import('./uk').then((module) => module.default),
};

export async function getTranslations(locale: Locale): Promise<Translations> {
	if (!translations[locale]) {
		throw new Error(`No translations for locale "${locale}"`);
	}
	return await translations[locale]();
}
