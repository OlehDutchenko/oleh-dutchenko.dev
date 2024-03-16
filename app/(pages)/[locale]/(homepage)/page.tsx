import { Article } from '@/_components/Article';
import { Container } from '@/_components/Container';
import { Markdown } from '@/_components/Markdown';
import { generateStaticParams } from '@/_locales';
import { PageProps } from '@/_types/page-props';
import { readMarkdownFile } from '@/_utils/readMarkdownFile';
import React from 'react';

export { generateStaticParams };

export default function Homepage({ params }: PageProps): React.ReactElement {
	const content = readMarkdownFile(import.meta.url, params.locale);
	return (
		<main>
			<Container>
				<Article>
					<Markdown content={content} locale={params.locale} />
				</Article>
			</Container>
		</main>
	);
}
