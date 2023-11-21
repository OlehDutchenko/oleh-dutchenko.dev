import React from 'react';
import { Main } from './components/Main';
import { Nav, Props as NavProps } from './components/Nav';

interface Props extends NavProps, React.PropsWithChildren {}

export const MainLayout: React.FC<Props> = (props) => {
	return (
		<html lang={props.locale}>
			<body>
				<Nav translations={props.translations} locale={props.locale} />
				<Main>{props.children}</Main>
			</body>
		</html>
	);
};
