import { fontBase, fontCode, fontHeadings } from '@/_fonts';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export const metadata = {
	title: 'CV Oleh Dutchenko',
};

export default function RootLayout({ children }: PropsWithChildren) {
	const htmlClassName = clsx(
		fontBase.variable,
		fontHeadings.variable,
		fontCode.variable
	);
	return (
		<html lang="en" className={htmlClassName}>
			<head>
				<link
					rel="icon"
					type="image/svg+xml"
					href="/static/favicon.svg"
				/>
				<link rel="icon" type="image/png" href="/static/favicon.png" />
			</head>
			<body>{children}</body>
		</html>
	);
}
