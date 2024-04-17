import { AccentElement } from '@/_components/AccentElement';
import { PropsWithChildren, ReactElement } from 'react';
import styles from './styles.module.css';

interface Props extends PropsWithChildren {}

export function ImageWrapper({ children }: Props): ReactElement {
	return (
		<AccentElement>
			<div className={styles.box}>{children}</div>
		</AccentElement>
	);
}
