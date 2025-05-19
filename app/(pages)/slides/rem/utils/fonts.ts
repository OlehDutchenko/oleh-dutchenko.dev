import clsx from 'clsx';
import {
	Forum as FontSlideHeading,
	Literata as FontSlideBase,
} from 'next/font/google';

const fontSlideHeading = FontSlideHeading({
	subsets: ['latin', 'cyrillic'],
	weight: ['400'],
	display: 'swap',
	variable: '--font-slide-heading',
});

const fontSlideBase = FontSlideBase({
	subsets: ['latin', 'cyrillic'],
	weight: ['400'],
	display: 'swap',
	variable: '--font-slide-base',
});

export const fontsClassName = clsx(
	fontSlideHeading.variable,
	fontSlideBase.variable
);
