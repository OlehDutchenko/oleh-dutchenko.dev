import { getRequestConfig } from 'next-intl/server';
import { DEFAULT_LOCALE, isLocale } from './locale';

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = (await requestLocale) || '';
	locale = isLocale(locale) ? locale : DEFAULT_LOCALE;

	return {
		locale,
		messages: (await import(`./messages/${locale}.json`)).default,
	};
});
