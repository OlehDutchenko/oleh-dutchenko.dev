import React from 'react';
import styles from './styles.module.css';

export interface ControlProps {
	children?: NonNullable<React.ReactNode>;
}

export const Control: React.FC<ControlProps> = ({ children }) => {
	return (
		<div className={styles.control}>
			<div className={styles.controlInner}>{children}</div>
		</div>
	);
};
