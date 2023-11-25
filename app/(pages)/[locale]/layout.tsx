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
		items: translations.nav.items,
	};

	return (
		<html lang={locale} className={fontBase.className}>
			<body>
				<Header heading={heading} nav={nav} />
				{props.children}
				<Footer />
			</body>
		</html>
	);
}
