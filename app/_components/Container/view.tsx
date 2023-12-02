import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

export interface ContainerProps {
	children: NonNullable<React.ReactNode>;
	className?: string;
	maxWidth?: 'sm' | 'md' | 'lg';
}

export const Container: React.FC<ContainerProps> = ({
	children,
	className,
	maxWidth = 'sm',
}) => {
	const maxWidthClassName = styles[`maxWidth_${maxWidth}`];
	return (
		<div className={clsx(styles.container, maxWidthClassName, className)}>
			{children}
		</div>
	);
};
