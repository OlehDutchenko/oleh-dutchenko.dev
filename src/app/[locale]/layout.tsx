import React from 'react';
import { MainContent } from './_layout-components/MainContent';
import { MainNav } from './_layout-components/MainNav';

const Layout: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<>
			<MainNav />
			<MainContent>{props.children}</MainContent>
		</>
	);
};

export { Layout as default };
