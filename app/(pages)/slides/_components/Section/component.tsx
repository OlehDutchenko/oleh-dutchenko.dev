import clsx from 'clsx';
import { PropsWithChildren, ReactElement } from 'react';
import styles from './styles.module.css';
import { BgColor, getBgColor } from './utils/getBgColor';
import { BgImage, getBgImage } from './utils/getBgImage';

interface Props extends PropsWithChildren {
	bgColor?: BgColor;
	bgImage?: BgImage;
	className?: string;
	autoAnimate?: boolean;
	width100p?: boolean;
	transition?:
		| 'zoom-in zoom-out'
		| 'zoom-in slide-out'
		| 'zoom-in fade-out'
		| 'fade'
		| 'fade-in zoom-out'
		| 'slide-in slide-out';
}

export function Section({
	bgColor,
	bgImage,
	children,
	className,
	autoAnimate,
	transition = 'zoom-in slide-out',
	width100p,
	...props
}: Props): ReactElement {
	return (
		<section
			{...props}
			data-auto-animate={autoAnimate || undefined}
			data-background-color={getBgColor(bgColor)}
			data-background-image={getBgImage(bgImage)}
			data-transition={transition}
			data-transition-speed="slow"
			className={clsx(
				width100p && [styles.width100p, 'custom'],
				className
			)}
		>
			{children}
		</section>
	);
}
