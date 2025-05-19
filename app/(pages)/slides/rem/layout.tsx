import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import './globals.css';
import { fontsClassName } from './utils/fonts';

export const metadata = {
	title: 'Слайди доповіді "Rem — одна одиниця, щоб правити всім"',
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="uk" className={clsx(fontsClassName, 'talk-rem')}>
			<body>{children}</body>
		</html>
	);
}
