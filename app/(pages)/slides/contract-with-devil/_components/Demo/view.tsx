import clsx from 'clsx';
import { ReactElement, ReactNode } from 'react';
import styles from './styles.module.css';

interface Props {
	className?: string;
	lines?: string;
	children: ReactNode;
	lang?: 'ts' | 'tsx';
}

export function Demo({
	children,
	className,
	lang = 'ts',
	lines,
}: Props): ReactElement {
	return (
		<div className={clsx(styles.demo, className)}>
			<pre className={clsx(lines && 'code-wrapper-hide-numbers')}>
				<code className={clsx('hljs', lang)} data-line-numbers={lines}>
					{children}
				</code>
			</pre>
		</div>
	);
}
