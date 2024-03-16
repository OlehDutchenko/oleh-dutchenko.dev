import { DEFAULT_LOCALE } from '@/_locales';
import NextLink from 'next/link';
import React, { PropsWithChildren, ReactElement } from 'react';
import { External } from './components/Extenal';

export interface LinkProps extends PropsWithChildren {
	className?: string;
	href: string;
	locale?: string;
	title?: string;
}

export function Link({
	locale = DEFAULT_LOCALE,
	...props
}: LinkProps): ReactElement {
	if (isInternal(props.href)) {
		const href = normalizeInternalHref(props.href, locale);
		return <NextLink {...props} href={href} />;
	}
	return <External {...props} />;
}

const LOCALE_START_REGEXP = /^\/\[locale]/;

function isInternal(href: string): boolean {
	return LOCALE_START_REGEXP.test(href) || /^\/[a-z]/.test(href);
}

function normalizeInternalHref(href: string, locale: string): string {
	if (LOCALE_START_REGEXP.test(href)) {
		return href.replace('/[locale]', `/${locale}`);
	}
	return href;
}
