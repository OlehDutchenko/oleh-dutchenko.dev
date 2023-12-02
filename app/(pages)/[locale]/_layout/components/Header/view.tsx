import { Container } from '@/_components/Container';
import React from 'react';
import {
	Heading,
	HeadingProps,
	LocaleSwitcher,
	LocaleSwitcherProps,
	Nav,
	NavProps,
} from './components';
import styles from './styles.module.css';

export interface HeaderProps {
	heading: HeadingProps;
	nav: NavProps;
	localeSwitcher: LocaleSwitcherProps;
}

export const Header: React.FC<HeaderProps> = ({
	heading: headingProps,
	nav: navProps,
	localeSwitcher: localeSwitcherProps,
}) => {
	return (
		<>
			<header className={styles.header}>
				<Container className={styles.container} maxWidth="lg">
					<Heading {...headingProps} />
					<Nav {...navProps} />
					<LocaleSwitcher {...localeSwitcherProps} />
				</Container>
			</header>
			<hr className={styles.divider} />
		</>
	);
};
