import { LayoutProps } from '@/types';
import React from 'react';
import { MainLayout } from '@/_layout/MainLayout';

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
	return (
		<MainLayout
			lang={props.params.locale}
			navLabels={{
				homepage: 'Головна',
			}}
		>
			{props.children}
		</MainLayout>
	);
};

export { Layout as default };
