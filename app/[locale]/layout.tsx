import { fontBase } from '@/_fonts';
import type { LayoutProps } from '@/types';
import React from 'react';
import { Heading, Nav } from './_layout/components';
import { getTranslations } from './_layout/translations';

export default async function Layout(
	props: LayoutProps
): Promise<React.ReactElement> {
	const children = props.children;
	const locale = props.params.locale;
	const translations = await getTranslations(locale);

	return (
		<html lang={locale} className={fontBase.className}>
			<body>
				<header className="main-layout-header">
					<Heading translations={translations} />
					<Nav translations={translations} locale={locale} />
				</header>
				<hr style={{ opacity: 0.4 }} />
				{children}
			</body>
		</html>
	);
}
