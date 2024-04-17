import clsx from 'clsx';
import { PropsWithChildren, ReactElement } from 'react';
import styles from './styles.module.css';

interface Props extends PropsWithChildren {
	className?: string;
}

export function AccentElement({ children, className }: Props): ReactElement {
	return (
		<div className={clsx(styles.accent, className)}>
			<div className={styles.inner}>{children}</div>
		</div>
	);
}
