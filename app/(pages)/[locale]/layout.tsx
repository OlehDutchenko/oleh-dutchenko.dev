import { isLocale } from '@/_i18n/locale';
import { notFound } from 'next/navigation';
import { ReactElement } from 'react';

export default async function RootLayout({
	children,
	params,
}: LayoutProps): Promise<ReactElement> {
	const { locale } = await params;

	throw404WithUnknownLocale(locale);

	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

function throw404WithUnknownLocale(locale: string) {
	if (!isLocale(locale)) notFound();
}
