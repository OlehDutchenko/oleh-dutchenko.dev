import { LocaleParam, STATIC_LOCALE_PARAMS } from '@/_locales/constants';
import { PageProps } from '@/_types/page-props';
import React from 'react';

export function generateStaticParams(): LocaleParam[] {
	return STATIC_LOCALE_PARAMS;
}

export default function InnerPage(props: PageProps): React.ReactElement {
	return (
		<main>
			<header>
				<h1>Привіт світ!</h1>
			</header>
			<p>Lorem ipsum dolor sit amet.</p>
		</main>
	);
}
