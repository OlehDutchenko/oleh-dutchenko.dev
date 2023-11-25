import { LocaleParam, STATIC_LOCALE_PARAMS } from '@/_locales/constants';
import { PageProps } from '@/_types/page-props';
import { readMarkdownFile } from '@/_utils/readMarkdownFile';
import Markdown from 'markdown-to-jsx';
import React from 'react';

export function generateStaticParams(): LocaleParam[] {
	return STATIC_LOCALE_PARAMS;
}

export default function InnerPage2({ params }: PageProps): React.ReactElement {
	const markdown = readMarkdownFile(import.meta.url, params.locale);
	return <Markdown>{markdown}</Markdown>;
}
