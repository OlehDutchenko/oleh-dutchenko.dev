import {
	JetBrains_Mono as FontCode,
	Literata as FontBase,
	Orelega_One as FontHeadings,
} from 'next/font/google';

export const fontBase = FontBase({
	subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
	display: 'swap',
});

export const fontHeadings = FontHeadings({
	subsets: ['latin', 'cyrillic'],
	weight: ['400'],
	display: 'swap',
});

export const fontCode = FontCode({
	subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
	display: 'swap',
});
