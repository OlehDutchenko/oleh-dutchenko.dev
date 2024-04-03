import { RollingFragment } from '@/(pages)/slides/contract-with-devil/_components/RollingFragment';
import clsx from 'clsx';
import { ReactElement } from 'react';
import styles from './styles.module.css';

export function MyTalkPromise(): ReactElement {
	return (
		<section
			data-background-color="black"
			data-transition="zoom-in slide-out"
			data-transition-speed="slow"
		>
			<h3>Наприкінці розповіді</h3>
			<div className={styles.block}>
				<RollingFragment
					component="p"
					roll="left"
					className={styles.left}
				>
					я спробую відповісти <br />
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
		</section>
	);
}
