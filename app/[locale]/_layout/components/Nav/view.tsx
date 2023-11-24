import Link from 'next/link';
import React from 'react';
import { Params, useNavItems } from './useNavItems';

interface Props extends Params {}

export const Nav: React.FC<Props> = (props) => {
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
