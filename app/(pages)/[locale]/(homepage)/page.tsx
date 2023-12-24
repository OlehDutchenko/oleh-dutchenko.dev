import { Container } from '@/_components/Container';
import { PageProps } from '@/_types/page-props';
import { generateStaticParams } from '@/_utils/generateStaticParams';
import { readMarkdownFile } from '@/_utils/readMarkdownFile';
import Markdown from 'markdown-to-jsx';
import React from 'react';

export { generateStaticParams };

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
