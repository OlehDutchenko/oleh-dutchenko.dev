import { ReactElement, ReactNode } from 'react';
import { Fragment } from '../Fragment';
import { RollingFragment } from '../RollingFragment';
import styles from './styles.module.css';

interface Props {
	left: ReactNode;
	right: ReactNode;
}

export function SlashBlock({ left, right }: Props): ReactElement {
	return (
		<div className={styles.block}>
			<RollingFragment
				component="div"
				roll="left"
				className={styles.left}
			>
				{left}
			</RollingFragment>
			<Fragment className={styles.slash}>/</Fragment>
			<RollingFragment
				component="div"
				roll="right"
				className={styles.right}
			>
				{right}
			</RollingFragment>
		</div>
	);
}
