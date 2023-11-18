import Link from 'next/link';
import React from 'react';
import { NavProps } from './types';
import { useNavItems } from './useNavItems';

export const Nav: React.FC<NavProps> = (props) => {
	const navItems = useNavItems(props);

	return (
		<nav>
			<ul>
				{navItems.map((item) => (
					<li key={item.key}>
						<Link href={item.href}>{item.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
