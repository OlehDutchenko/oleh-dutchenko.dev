import clsx from 'clsx';
import { Gloock as AccentFont } from 'next/font/google';
import React from 'react';
import { PageCaption } from '../../_components/PageCaption';

const fontForName = AccentFont({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
});

export const Header: React.FC = () => {
	return (
		<header className="cv-box">
			<PageCaption mainPage />
			<h1 className={clsx('cv-heading', fontForName.className)}>
				Oleh
				<br />
				Dutchenko
			</h1>
		</header>
	);
};
