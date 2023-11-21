import { MainLayout } from '@/_layout/MainLayout';
import { LayoutProps } from '@/types';
import React from 'react';

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
	return (
		<MainLayout locale={props.params.locale}>{props.children}</MainLayout>
	);
};

export { Layout as default };
