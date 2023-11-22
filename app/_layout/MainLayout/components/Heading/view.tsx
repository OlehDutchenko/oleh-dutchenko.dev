import { Translations } from '@/_layout/MainLayout/translations';
import Image from 'next/image';
import React from 'react';

export interface Props {
	translations: Translations;
}

export const Heading: React.FC<Props> = ({ translations }) => {
	return (
		<h1 aria-label={translations.heading.label}>
			<Image
				width="72"
				height="69"
				src="/static/logo.svg"
				aria-hidden="true"
				alt={translations.heading.icon}
			/>
		</h1>
	);
};
