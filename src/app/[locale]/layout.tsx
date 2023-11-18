import React from 'react';
import { MainLayout } from '../_layout-components/MainLayout';

const Layout: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<MainLayout
			lang="uk"
			navLabels={{
				homepage: 'Головна',
			}}
		>
			{props.children}
		</MainLayout>
	);
};

export { Layout as default };
