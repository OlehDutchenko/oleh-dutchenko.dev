import { fontBase } from '@/_fonts';
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
		<html lang={locale} className={fontBase.className}>
			<body>
				<header className="main-layout-header">
					<Heading translations={translations} />
					<Nav translations={translations} locale={locale} />
				</header>
				<hr style={{ opacity: 0.4 }} />
				{children}
			</body>
		</html>
	);
};
