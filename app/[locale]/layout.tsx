import { MainLayout } from '@/_layout/MainLayout';
import { getTranslations } from '@/_layout/MainLayout/translations';
import type { LayoutProps } from '@/types';
import React from 'react';

export default async function Layout(
	props: LayoutProps
): Promise<React.ReactElement> {
	const locale = props.params.locale;
	const translations = await getTranslations(locale);
	return (
		<MainLayout locale={locale} translations={translations}>
			{props.children}
		</MainLayout>
	);
}
