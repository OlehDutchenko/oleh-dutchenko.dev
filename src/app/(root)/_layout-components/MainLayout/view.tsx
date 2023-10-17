import React from 'react';
import { Main } from './components/Main';
import { Nav } from './components/Nav';
import { MainLayoutProps } from './types';

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
	const { lang, navLabels, children } = props;
	return (
		<html lang={lang}>
			<body>
				<Nav navLabels={navLabels} rootHref={`/${lang}`} />
				<Main>{children}</Main>
			</body>
		</html>
	);
};
