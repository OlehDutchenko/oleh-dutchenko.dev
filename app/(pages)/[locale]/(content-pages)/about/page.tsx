import { Markdown } from '@/_components/Markdown';
import { PageProps } from '@/_types/page-props';
import { generateStaticParams } from '@/_utils/generateStaticParams';
import { readMarkdownFile } from '@/_utils/readMarkdownFile';
import React from 'react';

export { generateStaticParams };

export default function InnerPage2({ params }: PageProps): React.ReactElement {
	const content = readMarkdownFile(import.meta.url, params.locale);
	return <Markdown content={content} />;
}
