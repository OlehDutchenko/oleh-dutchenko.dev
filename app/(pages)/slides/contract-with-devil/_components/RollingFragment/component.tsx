import clsx from 'clsx';
import { ComponentProps, CSSProperties, ReactElement } from 'react';
import { Fragment } from '../Fragment';
import styles from './styles.module.css';

interface Props extends ComponentProps<typeof Fragment> {
	roll?: 'up' | 'down' | 'left' | 'right';
	maxHeight?: number;
}

export function RollingFragment({
	maxHeight = 50,
	roll = 'up',
	className: propClassName,
	style: propStyle,
	children,
	...props
}: Props): ReactElement {
	const className = clsx(styles.block, 'fragment', propClassName);
	const style = { ...propStyle, '--mh': `${maxHeight}px` } as CSSProperties;

	return (
		<Fragment
			{...props}
			className={className}
			style={style}
			data-roll={roll}
		>
			<span className={styles.child}>{children}</span>
		</Fragment>
	);
}
