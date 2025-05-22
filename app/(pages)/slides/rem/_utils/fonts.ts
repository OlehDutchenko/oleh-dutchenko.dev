import { fontCode } from '@/_fonts';
import clsx from 'clsx';
import {
	Forum as FontSlideTitle,
	Forum as FontSlideHeading,
	Tenor_Sans as FontSlideBase,
} from 'next/font/google';

const fontSlideTitle = FontSlideTitle({
	subsets: ['latin', 'cyrillic'],
	weight: ['400'],
	display: 'swap',
	variable: '--font-slide-title',
});

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
	fontSlideTitle.variable,
	fontSlideHeading.variable,
	fontSlideBase.variable,
	fontCode.variable
);
