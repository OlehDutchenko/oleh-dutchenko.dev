import { STATIC_LOCALE_PARAMS } from '@/_locales/constants';
import { MDContentFolder } from '@/_locales/MultiLangFolder';
import {
	resolveCurrentFolder,
} from '@/_utils/resolve-fs';
import { PageProps } from '@/types';
import Markdown from 'markdown-to-jsx';
import React from 'react';

export async function generateStaticParams() {
	return STATIC_LOCALE_PARAMS;
}

function getMDContent(locale: string) {
	const mdContentFolder = new MDContentFolder({
		path: resolveCurrentFolder(import.meta.url),
	});
	return mdContentFolder.getLanguageFile(locale);
}

export default async function InnerPage(
	props: PageProps
): Promise<React.ReactElement> {
	const mdContent = getMDContent(props.params.locale) || '';

	return (
		<div>
			<Markdown>{mdContent}</Markdown>
		</div>
	);
}
