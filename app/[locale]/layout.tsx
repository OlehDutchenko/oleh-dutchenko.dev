import { MainLayout } from '@/_layout/MainLayout';
import { getTranslations } from '@/_layout/MainLayout/translations';
import { LayoutProps } from '@/types';
import React from 'react';

const Layout: React.FC<LayoutProps> = async (props: LayoutProps) => {
	const translations = await getTranslations(props.params.locale);
	return (
		<MainLayout locale={props.params.locale} translations={translations}>
			{props.children}
		</MainLayout>
	);
};

export { Layout as default };
