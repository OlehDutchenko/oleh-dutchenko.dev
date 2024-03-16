import { Container } from '@/_components/Container';
import React from 'react';
import {
	HowThisPageWorks,
	Props as HowThisPageWorksProps,
} from './components/HowThisPageWorks';
import styles from './styles.module.css';

export interface FooterProps {
	howThisPageWorks: HowThisPageWorksProps;
}

export const Footer: React.FC<FooterProps> = ({ howThisPageWorks }) => {
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
};
