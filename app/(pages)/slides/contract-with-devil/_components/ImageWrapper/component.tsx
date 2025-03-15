import { PropsWithChildren, ReactElement } from 'react';
import { AccentElement } from '../AccentElement';
import styles from './styles.module.css';

interface Props extends PropsWithChildren {}

export function ImageWrapper({ children }: Props): ReactElement {
	return (
		<AccentElement>
			<div className={styles.box}>{children}</div>
		</AccentElement>
	);
}
