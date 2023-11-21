import React from 'react';
import { Main } from './components/Main';
import { Nav } from './components/Nav';
import { MainLayoutProps } from './types';

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
	const { locale, children } = props;
	return (
		<html lang={locale}>
			<body>
				<Nav locale={locale} />
				<Main>{children}</Main>
			</body>
		</html>
	);
};
