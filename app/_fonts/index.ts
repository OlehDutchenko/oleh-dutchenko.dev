import {
	JetBrains_Mono as FontCode,
	Literata as FontBase,
	Orelega_One as FontHeadings,
} from 'next/font/google';

export const fontHeadings = FontHeadings({
	subsets: ['latin', 'cyrillic'],
	weight: ['400'],
	display: 'swap',
	variable: '--font-headings',
});

export const fontBase = FontBase({
	subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
	display: 'swap',
	variable: '--font-base',
});

export const fontCode = FontCode({
	subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
	display: 'swap',
	variable: '--font-code',
});
