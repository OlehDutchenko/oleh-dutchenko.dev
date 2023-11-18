import { PageProps } from '@/app/types';
import { STATIC_LOCALE_PARAMS } from '@/locales/STATIC_LOCALE_PARAMS';
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
};