import { STATIC_LOCALE_PARAMS } from '@/_locales/constants';
import { MDContentFolder } from '@/_locales/MultiLangFolder';
import { resolveCurrentFolder } from '@/_utils/resolveFS';
import { PageProps } from '@/types';
import Markdown from 'markdown-to-jsx';
import React from 'react';

export function generateStaticParams() {
	return STATIC_LOCALE_PARAMS;
}

function getMDContent(locale: string) {
	const mdContentFolder = new MDContentFolder({
		path: resolveCurrentFolder(import.meta.url),
	});
	return mdContentFolder.getLanguageFile(locale);
}

const InnerPage2: React.FC<PageProps> = (props) => {
	const mdContent = getMDContent(props.params.locale) || '';

	return (
		<div>
			<Markdown>{mdContent}</Markdown>
		</div>
	);
};

export { InnerPage2 as default };
