import React from 'react';
import { Heading, HeadingProps, Nav, NavProps } from './components';

type Props = NavProps & HeadingProps;

export const Header: React.FC<Props> = ({ locale, translations }) => {
	return (
		<>
			<header className="main-layout-header">
				<Heading translations={translations} />
				<Nav translations={translations} locale={locale} />
			</header>
			<hr />
		</>
	);
};
