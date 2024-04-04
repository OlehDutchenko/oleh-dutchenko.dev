import { RollingFragment } from '@/(pages)/slides/contract-with-devil/_components/RollingFragment';
import clsx from 'clsx';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';
import styles from './styles.module.css';

export function OpenSourceAndGames(): ReactElement {
	return (
		<Section bgColor="darker">
			<h3>Окрім основної діяльності</h3>
			<div className={styles.block}>
				<RollingFragment
					component="p"
					roll="left"
					className={styles.left}
				>
					Займаюсь опенсоурсними <br />
					пет-проектами
				</RollingFragment>
				<div className={clsx('fragment', styles.slash)}>/</div>
				<RollingFragment
					component="p"
					roll="right"
					className={styles.right}
				>
					та граю <br />у відеоігри
				</RollingFragment>
			</div>
		</Section>
	);
}
