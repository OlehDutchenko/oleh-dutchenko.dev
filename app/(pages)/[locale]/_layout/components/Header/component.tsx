import { Container } from '@/_components/Container';
import { ReactElement } from 'react';
import { Heading, Props as HeadingProps } from './components/Heading';
import {
	LocaleSwitcher,
	Props as LocaleSwitcherProps,
} from './components/LocaleSwitcher';
import { Nav, Props as NavProps } from './components/Nav';
import styles from './styles.module.css';

export interface Props {
	heading: HeadingProps;
	nav: NavProps;
	localeSwitcher: LocaleSwitcherProps;
}

export function Header({
	heading: headingProps,
	nav: navProps,
	localeSwitcher: localeSwitcherProps,
}: Props): ReactElement {
	return (
		<>
			<header className={styles.header}>
				<Container className={styles.container} size="md">
					<Heading {...headingProps} />
					<Nav {...navProps} />
					<LocaleSwitcher {...localeSwitcherProps} />
				</Container>
			</header>
		</>
	);
}
