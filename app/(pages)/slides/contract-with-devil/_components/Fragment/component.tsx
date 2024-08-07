import clsx from 'clsx';
import {
	createElement,
	HTMLAttributes,
	PropsWithChildren,
	ReactElement,
} from 'react';

interface Props extends PropsWithChildren, HTMLAttributes<any> {
	component?: 'span' | 'div' | 'p' | 'footer' | 'h1' | 'h2' | 'h3' | 'li';
	dataSectionClassName?: string;
	fx?: 'fade-out' | 'fade-up' | 'fade-down' | 'fade-in-then-out';
	index?: number;
}

export function Fragment({
	component = 'span',
	dataSectionClassName,
	className,
	children,
	fx,
	index,
	...props
}: Props): ReactElement {
	return createElement(
		component,
		{
			className: clsx('fragment', fx, className),
			'data-section-class-name': dataSectionClassName,
			'data-fragment-index': index,
			...props,
		},
		children
	);
}
