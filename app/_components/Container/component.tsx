import clsx from 'clsx';
import React from 'react';
import { ContainerSize, DEFAULT_SIZE } from './constants';
import styles from './styles.module.css';

export interface ContainerProps {
	children: NonNullable<React.ReactNode>;
	className?: string;
	size?: ContainerSize;
}

export const Container: React.FC<ContainerProps> = ({
	children,
	className: customClassName,
	size = DEFAULT_SIZE,
}) => {
	return (
		<div
			className={clsx(styles.container, customClassName)}
			data-size={size}
		>
			{children}
		</div>
	);
};
