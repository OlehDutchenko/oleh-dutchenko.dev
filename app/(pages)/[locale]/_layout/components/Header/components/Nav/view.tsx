import Link from 'next/link';
import React from 'react';
import { Params, useNavItems } from './useNavItems';

export interface NavProps extends Params {
	description: string;
}

export const Nav: React.FC<NavProps> = ({ description, ...params }) => {
	const navItems = useNavItems(params);
	return (
		<nav aria-label={description} className="main-layout-header__nav">
			{navItems.map((item) => (
				<Link key={item.key} href={item.href}>
					{item.label}
				</Link>
			))}
		</nav>
	);
};
