'use client';

import React, { ReactElement } from 'react';
import { Item } from './components/Item';
import { Params, useNavItems } from './hooks/useNavItems';
import styles from './styles.module.css';

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
