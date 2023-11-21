import { STATIC_LOCALE_PARAMS } from '@/_locales/constants';
import { PageProps } from '@/types';
import React from 'react';

export function generateStaticParams() {
	return STATIC_LOCALE_PARAMS;
}

const InnerPage: React.FC<PageProps> = (props) => {
	return (
		<div>
			<h1>Привіт світ!</h1>
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
	);
};

export { InnerPage as default };
