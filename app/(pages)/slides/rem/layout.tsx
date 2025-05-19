import { PropsWithChildren } from 'react';

export const metadata = {
	title: 'Слайди доповіді "Rem — одна одиниця, щоб правити всім"',
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="uk">
			<body>{children}</body>
		</html>
	);
}
