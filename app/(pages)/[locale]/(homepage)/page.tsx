import { Container } from '@/_components/Container';
import { LocaleParam, STATIC_LOCALE_PARAMS } from '@/_locales/constants';
import type { PageProps } from '@/_types/page-props';
import { readMarkdownFile } from '@/_utils/readMarkdownFile';
import Markdown from 'markdown-to-jsx';
import React from 'react';

export function generateStaticParams(): LocaleParam[] {
	return STATIC_LOCALE_PARAMS;
}

export default function Homepage({ params }: PageProps): React.ReactElement {
	const markdown = readMarkdownFile(import.meta.url, params.locale);
	return (
		<main>
			<Container>
				<Markdown>{markdown}</Markdown>
			</Container>
		</main>
	);
}
