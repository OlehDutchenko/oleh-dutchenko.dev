import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';

export function Bio() {
	return (
		<>
			<RemSlide
				transition="slide-in slide-out"
				bgColor="light"
				bgIframe="/static/slides-rem/bio.html"
			/>
		</>
	);
}
