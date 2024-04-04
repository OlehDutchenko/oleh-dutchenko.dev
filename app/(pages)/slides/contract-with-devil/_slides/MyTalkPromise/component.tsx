import { RollingFragment } from '@/(pages)/slides/contract-with-devil/_components/RollingFragment';
import clsx from 'clsx';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';
import styles from './styles.module.css';

export function MyTalkPromise(): ReactElement {
	return (
		<Section bgColor="darker">
			<h3>Наприкінці розповіді</h3>
			<div className={styles.block}>
				<RollingFragment
					component="p"
					roll="left"
					className={styles.left}
				>
					я дам свою відповідь <br />
					на поставленне запитання
				</RollingFragment>
				<div className={clsx('fragment', styles.slash)}>/</div>
				<RollingFragment
					component="p"
					roll="right"
					className={styles.right}
				>
					а ви зробите <br />
					власні висновки
				</RollingFragment>
			</div>
		</Section>
	);
}
