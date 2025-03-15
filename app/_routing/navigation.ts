import { DEFAULT_LOCALE, LOCALES } from '@/_i18n/locale';
import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
	locales: LOCALES,
	defaultLocale: DEFAULT_LOCALE,
	localePrefix: 'always',
});

export const { Link, redirect, usePathname, useRouter } =
	createNavigation(routing);
