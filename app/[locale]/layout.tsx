import { MainLayout } from '@/_layout/MainLayout';
import { getTranslations } from '@/_layout/MainLayout/translations';
import type { LayoutProps } from '@/types';
import React from 'react';

const Layout: React.FC<LayoutProps> = async (props) => {
	const locale = props.params.locale;
	const translations = await getTranslations(locale);
	return (
		<MainLayout locale={locale} translations={translations}>
			{props.children}
		</MainLayout>
	);
};

export { Layout as default };
