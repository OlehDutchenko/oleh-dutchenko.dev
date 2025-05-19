import { PropsWithChildren, ReactElement } from 'react';
import { BgColor, getBgColor } from './utils/getBgColor';
import { BgImage, getBgImage } from './utils/getBgImage';

interface Props extends PropsWithChildren {
	bgColor?: BgColor;
	bgImage?: BgImage;
	className?: string;
	autoAnimate?: boolean;
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
			className={className}
		>
			{children}
		</section>
	);
}
