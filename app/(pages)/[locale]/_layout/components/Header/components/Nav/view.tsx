'use client';

import React, { ReactElement } from 'react';
import { Item } from './components/Item';
import styles from './styles.module.css';
import { Params, useNavItems } from './useNavItems';

export interface Props extends Params {
	description: string;
}

export function Nav({ description, ...params }: Props): ReactElement {
	const navItems = useNavItems(params);
	return (
		<nav aria-label={description} className={styles.nav}>
			{navItems.map(({ props, key }) => (
				<Item {...props} key={key} />
			))}
		</nav>
	);
}
