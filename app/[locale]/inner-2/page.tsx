import { STATIC_LOCALE_PARAMS } from '@/_locales/STATIC_LOCALE_PARAMS';
import { MarkdownFolder } from '@/_utils/markdown-folder';
import {
	resolveCurrentFilePath,
	resolveCurrentFolder
} from '@/_utils/resolve-fs';
import { PageProps } from '@/types';
import Markdown from 'markdown-to-jsx';
import React from 'react';

export async function generateStaticParams() {
	return STATIC_LOCALE_PARAMS;
}

function getMDContent(locale: string) {
	const markdownFolder = new MarkdownFolder({
		path: resolveCurrentFolder(import.meta.url)
	});
	return markdownFolder.readFile(locale);
}

export default async function InnerPage(props: PageProps): Promise<React.ReactElement> {
	const mdContent = getMDContent(props.params.locale) || '';

	return (
		<div>
			<Markdown>{mdContent}</Markdown>
		</div>
	);
};
