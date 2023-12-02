import { fontBase } from '@/_fonts';
import type { LayoutProps } from '@/_types/layout-props';
import { HRefMaker } from '@/_utils/HRefMaker';
import React from 'react';
import { Footer, Header, HeaderProps } from './_layout/components';
import { getTranslations } from './_layout/translations';

export default async function Layout(
	props: LayoutProps
): Promise<React.ReactElement> {
	const locale = props.params.locale;
	const translations = await getTranslations(locale);

	const heading: HeaderProps['heading'] = {
		label: translations.heading.label,
		iconAlt: translations.heading.iconAlt,
	};

	const nav: HeaderProps['nav'] = {
		rootHref: new HRefMaker(locale).make('/'),
		description: translations.nav.description,
		items: translations.nav.items,
	};

	const localeSwitcher: HeaderProps['localeSwitcher'] = {
		description: translations.localeSwitcher.description,
		options: [
			{
				label: 'English',
				value: 'en',
			},
			{
				label: 'Українська',
				value: 'uk',
			},
		],
	};

	return (
		<html lang={locale} className={fontBase.className}>
			<head>
				<link
					rel="icon"
					type="image/svg+xml"
					href="/static/favicon.svg"
				/>
				<link rel="icon" type="image/png" href="/static/favicon.png" />
			</head>
			<body>
				<Header
					heading={heading}
					nav={nav}
					localeSwitcher={localeSwitcher}
				/>
				{props.children}
				<Footer />
			</body>
		</html>
	);
}
