import React from 'react';
import { Nav, Props as NavProps } from './components/Nav';

interface Props extends NavProps, React.PropsWithChildren {}

export const MainLayout: React.FC<Props> = (props) => {
	return (
		<html lang={props.locale}>
			<body>
				<Nav translations={props.translations} locale={props.locale} />
				{props.children}
			</body>
		</html>
	);
};
