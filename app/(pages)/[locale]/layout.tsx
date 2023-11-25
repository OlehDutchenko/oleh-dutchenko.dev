import { fontBase } from '@/_fonts';
import type { LayoutProps } from '@/types';
import React from 'react';
import { Header, Heading, Nav } from './_layout/components';
import { getTranslations } from './_layout/translations';

export default async function Layout(
	props: LayoutProps
): Promise<React.ReactElement> {
	const locale = props.params.locale;
	const translations = await getTranslations(locale);

	return (
		<html lang={locale} className={fontBase.className}>
			<body>
				<Header>
					<Heading translations={translations} />
					<Nav translations={translations} locale={locale} />
				</Header>
				{props.children}
			</body>
		</html>
	);
}
