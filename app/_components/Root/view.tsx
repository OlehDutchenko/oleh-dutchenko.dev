import { fontBase, fontCode, fontHeadings } from '@/_fonts';
import { DEFAULT_LOCALE } from '@/_locales';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

interface Props {
	locale?: string;
	gridBody?: boolean;
	bodyClassName?: string;
	noindex?: boolean;
	children: NonNullable<React.ReactNode>;
}

export const Root: React.FC<Props> = ({
	locale = DEFAULT_LOCALE,
	gridBody = false,
	bodyClassName: propBodyClassName,
	children,
}) => {
	const htmlClassName = clsx(
		fontBase.variable,
		fontHeadings.variable,
		fontCode.variable
	);

	const bodyClassName = clsx(propBodyClassName, gridBody && styles.gridBody);

	return (
		<html lang={locale} className={htmlClassName}>
			<head>
				<link
					rel="icon"
					type="image/svg+xml"
					href="/static/favicon.svg"
				/>
				<link rel="icon" type="image/png" href="/static/favicon.png" />
			</head>
			<body className={bodyClassName}>{children}</body>
		</html>
	);
};
