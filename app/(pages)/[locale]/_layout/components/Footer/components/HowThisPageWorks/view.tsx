'use client';

import { useParams, usePathname } from 'next/navigation';
import React from 'react';
import 'client-only';

export interface HowThisPageWorksProps {
	label: string;
	title: string;
}

export const HowThisPageWorks: React.FC<HowThisPageWorksProps> = (props) => {
	const href = useHref();
	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			title={props.title}
			href={href}
		>
			{props.label}
		</a>
	);
};

const HREF =
	'https://github.com/OlehDutchenko/oleh-dutchenko.dev/tree/master/app';

function useHref(): string {
	const pathname = usePathname();
	const { locale } = useParams();

	let path = pathname.endsWith(`/${locale}`)
		? pathname + '/(homepage)'
		: pathname;

	path = path
		.replace('/about', '/(content-pages)/about')
		.replace('/ui-kit', '/(content-pages)/ui-kit')
		.replace('/envato', '/(envato-pages)/envato')
		.replace(`/${locale}`, '/(pages)/%5Blocale%5D');

	return HREF + path + '/page.tsx';
}
