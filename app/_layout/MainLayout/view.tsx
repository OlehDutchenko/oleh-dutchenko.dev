import React from 'react';
import { Heading } from './components/Heading';
import { Nav, Props as NavProps } from './components/Nav';

interface Props extends NavProps, React.PropsWithChildren {}

export const MainLayout: React.FC<Props> = ({
	translations,
	locale,
	children,
}) => {
	return (
		<html lang={locale}>
			<body>
				<header className="main-layout-header">
					<Heading translations={translations} />
					<Nav translations={translations} locale={locale} />
				</header>
				{children}
			</body>
		</html>
	);
};
