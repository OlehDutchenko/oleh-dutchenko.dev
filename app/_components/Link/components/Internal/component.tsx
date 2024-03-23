'use client';

import { PageProps } from '@/_types/page-props';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { PropsWithChildren, ReactElement } from 'react';
import { LOCALE_START_REGEXP } from './constants';

interface Props extends PropsWithChildren {
	href: string;
	className?: string;
	title?: string;
}

export function Internal({ href, ...props }: Props): ReactElement {
	const internalHref = useInternalHref(href);
	return <Link {...props} href={internalHref} />;
}

function useInternalHref(href: string): string {
	const pathname = usePathname();
	const { locale } = useParams<PageProps['params']>();
	if (href.startsWith('./')) {
		return `${pathname}${href.slice(1)}`;
	} else if (LOCALE_START_REGEXP.test(href)) {
		return href.replace('/[locale]', `/${locale}`);
	}
	return href;
}
