import clsx from 'clsx';
import {
	createElement,
	CSSProperties,
	PropsWithChildren,
	ReactElement,
} from 'react';
import styles from './styles.module.css';

interface Props extends PropsWithChildren {
	component?: 'span' | 'div' | 'p';
	roll?: 'up' | 'down' | 'left' | 'right';
	maxHeight?: number;
	className?: string;
}

export function RollingFragment({
	maxHeight = 50,
	component = 'span',
	roll = 'up',
	className: propClassName,
	children,
}: Props): ReactElement {
	const className = clsx(styles.block, 'fragment', propClassName);
	const style = { '--mh': `${maxHeight}px` } as CSSProperties;

	return createElement(
		component,
		{ className, style, 'data-roll': roll },
		<span className={styles.child}>{children}</span>
	);
}
