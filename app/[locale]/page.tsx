import { STATIC_LOCALE_PARAMS } from '@/_locales/constants';
import type { PageProps } from '@/types';
import React from 'react';

export function generateStaticParams() {
	return STATIC_LOCALE_PARAMS;
}

const Homepage: React.FC<PageProps> = (props) => {
	return (
		<div>
			<h1>Привіт світ!</h1>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
	);
};

export { Homepage as default };
