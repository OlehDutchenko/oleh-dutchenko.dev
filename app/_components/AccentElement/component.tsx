import { PropsWithChildren, ReactElement } from 'react';
import styles from './styles.module.css';

interface Props extends PropsWithChildren {}

export function AccentElement({ children }: Props): ReactElement {
	return (
		<div className={styles.accent}>
			<div className={styles.inner}>{children}</div>
		</div>
	);
}
