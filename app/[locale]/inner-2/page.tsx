import { STATIC_LOCALE_PARAMS } from '@/_locales/STATIC_LOCALE_PARAMS';
import { LocaleName } from '@/_locales/types';
import { PageProps } from '@/types';
import { FsWalker } from '@wezom/fs-walker';
import Markdown from 'markdown-to-jsx';
import { dirname, join } from 'path';
import React from 'react';
import { fileURLToPath } from 'url';

export async function generateStaticParams() {
	return STATIC_LOCALE_PARAMS;
}

interface Params {
	locale: LocaleName;
}

function getContent(params: Params) {
	const folder = dirname(fileURLToPath(import.meta.url));
	const source = join(folder, `./content.${params.locale}.md`);
	const fileSource = FsWalker.defineFile(source);
	console.log(fileSource);
	return Promise.resolve(fileSource.readAsText());
}

export default async function InnerPage(props: PageProps): Promise<React.ReactElement> {
	const content = await getContent({
		locale: props.params.locale
	});
	console.log({ content });
	return (
		<div>
			<Markdown>{content}</Markdown>
		</div>
	);
};
