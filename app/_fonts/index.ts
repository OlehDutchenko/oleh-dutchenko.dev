import { Cormorant, JetBrains_Mono } from 'next/font/google';

export const fontHeadings = Cormorant({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-headings',
	display: 'swap',
});

export const fontMonospace = JetBrains_Mono({
	subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
	variable: '--font-monospace',
	display: 'swap',
});
