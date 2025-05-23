import { fontBase, fontCode, fontHeadings } from '@/_fonts';
import clsx from 'clsx';
import { Tenor_Sans as FontSlideBase } from 'next/font/google';
import { PropsWithChildren } from 'react';

export const metadata = {
	title: 'Слайди доповіді "Підводні камені генерованого TypeScript коду зі схеми GraphQL"',
};

const fontSlideBase = FontSlideBase({
	subsets: ['latin', 'cyrillic'],
	weight: ['400'],

	display: 'swap',
	variable: '--font-slide-base',
});

export default function RootLayout({ children }: PropsWithChildren) {
	const htmlClassName = clsx(
		fontBase.variable,
		fontHeadings.variable,
		fontCode.variable,
		fontSlideBase.variable
	);
	return (
		<html lang="en" className={htmlClassName}>
			<head>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="icon" type="image/png" href="/favicon.png" />
			</head>
			<body>{children}</body>
		</html>
	);
}
