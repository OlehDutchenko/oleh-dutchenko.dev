'use client';

import React from 'react';
import { Item } from './components/Item';
import { Params, useNavItems } from './useNavItems';

export interface NavProps extends Params {
	description: string;
}

export const Nav: React.FC<NavProps> = ({ description, ...params }) => {
	const navItems = useNavItems(params);
	return (
		<nav aria-label={description} className="main-layout-header__nav">
			{navItems.map(({ props, key }) => (
				<Item {...props} key={key} />
			))}
		</nav>
	);
};
