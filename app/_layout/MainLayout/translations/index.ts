import { LocaleName, LocalesRecord } from '@/_locales/constants';
import 'server-only';
import type { EN } from './en';
import type { UK } from './uk';

export type Translations = EN | UK;

const translations: LocalesRecord<() => Promise<Translations>> = {
	en: () => import('./en').then((module) => module.default),
	uk: () => import('./uk').then((module) => module.default),
};

export async function getTranslations(
	locale: LocaleName
): Promise<Translations> {
	return await translations[locale]();
}
