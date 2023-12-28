import { fontBase, fontCode, fontHeadings } from '@/_fonts';
import clsx from 'clsx';
import React from 'react';

interface Props {
	locale: string;
	children: NonNullable<React.ReactNode>;
}

export const Root: React.FC<Props> = ({ locale, children }) => {
	return (
		<html
			lang={locale}
			className={clsx(
				fontBase.variable,
				fontHeadings.variable,
				fontCode.variable
			)}
		>
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
};
