import { Container } from '@/_components/Container';
import { ReactElement } from 'react';
import {
	HowThisPageWorks,
	Props as HowThisPageWorksProps,
} from './components/HowThisPageWorks';
import styles from './styles.module.css';

export interface Props {
	howThisPageWorks: HowThisPageWorksProps;
}

export function Footer({ howThisPageWorks }: Props): ReactElement {
	return (
		<footer className={styles.footer}>
			<Container className={styles.container} size="md">
				<div />
				<HowThisPageWorks
					label={howThisPageWorks.label}
					title={howThisPageWorks.title}
				/>
			</Container>
		</footer>
	);
}
