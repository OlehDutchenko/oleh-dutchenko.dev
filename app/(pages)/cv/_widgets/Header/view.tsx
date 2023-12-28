import clsx from 'clsx';
import { Gloock as AccentFont } from 'next/font/google';
import React from 'react';

const fontForName = AccentFont({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
});

export const Header: React.FC = () => {
	return (
		<header className="cv-box">
			<div className="cv-heading-caption">
				<div>Frontend Tech Lead</div>
				<div>
					<a href="mailto:dutchenko.o.cv@gmail.com">
						dutchenko.o.cv@gmail.com
					</a>
				</div>
			</div>
			<h1 className={clsx('cv-heading', fontForName.className)}>
				Oleh
				<br />
				Dutchenko
			</h1>
		</header>
	);
};
