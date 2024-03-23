import clsx from 'clsx';
import { PropsWithChildren, ReactElement } from 'react';
import { ContainerSize, DEFAULT_SIZE } from './constants';
import styles from './styles.module.css';

interface Props extends PropsWithChildren {
	className?: string;
	size?: ContainerSize;
}

export function Container({
	children,
	className: customClassName,
	size = DEFAULT_SIZE,
}: Props): ReactElement {
	return (
		<div
			className={clsx(styles.container, customClassName)}
			data-size={size}
		>
			{children}
		</div>
	);
}
