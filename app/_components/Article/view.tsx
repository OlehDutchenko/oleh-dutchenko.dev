import { PropsWithChildren, ReactElement } from 'react';
import styles from './styles.module.css';

interface Props extends PropsWithChildren {}

export function Article({ children }: Props): ReactElement {
	return <div className={styles.article}>{children}</div>;
}
