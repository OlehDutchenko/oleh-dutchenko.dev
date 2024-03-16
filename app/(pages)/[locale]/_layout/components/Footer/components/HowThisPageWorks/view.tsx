'use client';

import { Link } from '@/_components/Link';
import { useParams, usePathname } from 'next/navigation';
import React, { ReactElement } from 'react';
import 'client-only';

export interface Props {
	label: string;
	title: string;
}

export function HowThisPageWorks({ label, title }: Props): ReactElement {
	const href = useHref();
	return (
		<Link href={href} title={title}>
			{label}
		</Link>
	);
}

const HREF =
	'https://github.com/OlehDutchenko/oleh-dutchenko.dev/tree/master/app';

function useHref(): string {
	const pathname = usePathname();
	const { locale } = useParams();

	let path = pathname.endsWith(`/${locale}`)
		? pathname + '/(homepage)'
		: pathname;

	path = path
		.replace('/talks', '/(talk-pages)/talks')
		.replace(`/${locale}`, '/(pages)/%5Blocale%5D');

	return HREF + path + '/page.tsx';
}
