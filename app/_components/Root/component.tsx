import { fontBase, fontCode, fontHeadings } from '@/_fonts';
import { DEFAULT_LOCALE } from '@/_locales';
import clsx from 'clsx';
import { PropsWithChildren, ReactElement } from 'react';
import styles from './styles.module.css';

interface Props extends PropsWithChildren {
	locale?: string;
	gridBody?: boolean;
	htmlClassName?: string;
	bodyClassName?: string;
	noindex?: boolean;
}

export function Root({
	locale = DEFAULT_LOCALE,
	gridBody = false,
	htmlClassName: propHtmlClassName,
	bodyClassName: propBodyClassName,
	children,
}: Props): ReactElement {
	const htmlClassName = clsx(
		fontBase.variable,
		fontHeadings.variable,
		fontCode.variable,
		propHtmlClassName
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
}
