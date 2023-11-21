import {
	Dictionary,
	LocaleName,
	TranslationDictionary,
} from '@/_locales/TranslationDictionary';
import 'server-only';
import type { EN } from './en';
import type { UK } from './uk';

export type Translations = EN | UK;

const dictionary: Dictionary<Translations> = {
	en: () => import('./en').then((module) => module.default),
	uk: () => import('./uk').then((module) => module.default),
};

export async function getTranslations(
	locale: LocaleName
): Promise<Translations> {
	const translations = new TranslationDictionary(dictionary);
	return await translations.read(locale);
}
