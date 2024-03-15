import { Container } from '@/_components/Container';
import { Markdown } from '@/_components/Markdown';
import { PageProps } from '@/_types/page-props';
import { generateStaticParams } from '@/_utils/generateStaticParams';
import { readMarkdownFile } from '@/_utils/readMarkdownFile';
import React from 'react';

export { generateStaticParams };

export default function Homepage({ params }: PageProps): React.ReactElement {
	const content = readMarkdownFile(import.meta.url, params.locale);
	return (
		<main>
			<Container>
				<Markdown content={content} />
			</Container>
		</main>
	);
}
