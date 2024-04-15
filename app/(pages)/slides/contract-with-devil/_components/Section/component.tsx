import { PropsWithChildren, ReactElement } from 'react';
import { BgColor, getBgColor } from './utils/getBgColor';
import { BgImage, getBgImage } from './utils/getBgImage';

interface Props extends PropsWithChildren {
	bgColor?: BgColor;
	bgImage?: BgImage;
	className?: string;
	transition?: 'zoom-in slide-out' | 'zoom-in zoom-out' | 'fade';
}

export function Section({
	bgColor,
	bgImage,
	children,
	className,
	transition = 'zoom-in slide-out',
}: Props): ReactElement {
	return (
		<section
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
