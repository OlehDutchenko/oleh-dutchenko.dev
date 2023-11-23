import { LocaleParam, STATIC_LOCALE_PARAMS } from '@/_locales/constants';
import { readMarkdownFile } from '@/_utils/readMarkdownFile';
import type { PageProps } from '@/types';
import React from 'react';

export function generateStaticParams(): LocaleParam[] {
	return STATIC_LOCALE_PARAMS;
}

export default function Homepage({ params }: PageProps): React.ReactElement {
	const markdown = readMarkdownFile(import.meta.url, params.locale);
	console.log({ markdown });
	return (
		<main>
			<header>
				<h1>Привіт світ!</h1>
			</header>
		</main>
	);
}
