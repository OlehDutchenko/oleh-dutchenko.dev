import { PageProps } from '@/types';
import { STATIC_LOCALE_PARAMS } from '@/_locales/constants';
import React from 'react';

export async function generateStaticParams() {
	return STATIC_LOCALE_PARAMS;
}

export default function Homepage(props: PageProps): React.ReactElement {
	return (
		<div>
			<h1>Привіт світ!</h1>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
	);
}
