import { LocaleParam, STATIC_LOCALE_PARAMS } from '@/_locales/constants';
import { PageProps } from '@/types';
import Markdown from 'markdown-to-jsx';
import { notFound } from 'next/navigation';
import React from 'react';
import { getMDContent } from './getMDContent';

export function generateStaticParams(): LocaleParam[] {
	return STATIC_LOCALE_PARAMS;
}

export default function InnerPage2(props: PageProps): React.ReactElement {
	const mdContent = getMDContent(props.params.locale);
	if (mdContent === null) {
		return notFound();
	}
	return <Markdown>{mdContent}</Markdown>;
}
