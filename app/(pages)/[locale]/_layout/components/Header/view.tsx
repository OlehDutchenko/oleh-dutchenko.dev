import React from 'react';
import {
	Heading,
	HeadingProps,
	LocaleSwitcher,
	Nav,
	NavProps,
} from './components';

export interface HeaderProps {
	heading: HeadingProps;
	nav: NavProps;
}

export const Header: React.FC<HeaderProps> = ({ heading, nav }) => {
	return (
		<>
			<header className="main-layout-header">
				<Heading label={heading.label} iconAlt={heading.iconAlt} />
				<Nav items={nav.items} rootHref={nav.rootHref} />
				<LocaleSwitcher
					options={[
						{
							label: 'English',
							value: 'en',
							selected: true,
						},
						{
							label: 'Українська',
							value: 'uk',
							selected: false,
						},
					]}
				/>
			</header>
			<hr />
		</>
	);
};
