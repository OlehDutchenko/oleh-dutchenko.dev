import clsx from 'clsx';
import { PropsWithChildren, ReactElement } from 'react';
import styles from './styles.module.css';
import { BgColor, getBgColor } from './utils/getBgColor';
import { BgImage, getBgImage } from './utils/getBgImage';

interface Props extends PropsWithChildren {
	bgColor?: BgColor;
	bgImage?: BgImage;
	bgIframe?: string;
	className?: string;
	autoAnimate?: boolean;
	width100p?: boolean;
	transition?:
		| 'zoom-out'
		| 'zoom-in'
		| 'zoom-in zoom-out'
		| 'zoom-in slide-out'
		| 'zoom-in fade-out'
		| 'fade'
		| 'fade-in zoom-out'
		| 'slide-in slide-out'
		| 'slide-in zoom-out'
		| null;
}

export function Section({
	bgColor,
	bgImage,
	bgIframe,
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
			data-transition={transition ?? undefined}
			data-transition-speed="slow"
			data-background-iframe={bgIframe}
			data-background-interactive={bgIframe ? true : undefined}
			className={clsx(
				width100p && [styles.width100p, 'custom'],
				className
			)}
		>
			{children}
		</section>
	);
}
