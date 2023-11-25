import Link from 'next/link';
import React from 'react';
import { Params, useNavItems } from './useNavItems';

export interface NavProps extends Params {}

export const Nav: React.FC<NavProps> = (props) => {
	const navItems = useNavItems(props);
	return (
		<nav className="main-layout-header__nav">
			{navItems.map((item) => (
				<Link key={item.key} href={item.href}>
					{item.label}
				</Link>
			))}
		</nav>
	);
};
