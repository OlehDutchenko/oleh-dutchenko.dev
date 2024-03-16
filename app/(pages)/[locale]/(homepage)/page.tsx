import { CommonPage } from '@/_components/CommonPage';
import { Markdown } from '@/_components/Markdown';
import { generateStaticParams } from '@/_locales';
import { PageProps } from '@/_types/page-props';
import { readMarkdownFile } from '@/_utils/readMarkdownFile';
import React from 'react';

export { generateStaticParams };

export default function Page({ params }: PageProps): React.ReactElement {
	const content = readMarkdownFile(import.meta.url, params.locale);
	return (
		<CommonPage>
			<Markdown content={content} />
		</CommonPage>
	);
}
