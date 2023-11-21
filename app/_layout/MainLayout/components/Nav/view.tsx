import Link from 'next/link';
import React from 'react';
import { Params, useNavItems } from './useNavItems';

export interface Props extends Params {}

export const Nav: React.FC<Props> = (props) => {
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
