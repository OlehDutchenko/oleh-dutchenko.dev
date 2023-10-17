import React from 'react';
import { MainLayout } from '../_layout-components/MainLayout';

const Layout: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<MainLayout
			lang="en"
			navLabels={{
				homepage: 'Homepage',
			}}
		>
			{props.children}
		</MainLayout>
	);
};

export { Layout as default };
