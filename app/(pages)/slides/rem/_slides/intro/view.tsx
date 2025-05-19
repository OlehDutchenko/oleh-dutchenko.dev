import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';

export function Intro() {
	return (
		<RemSlide bgColor="accent_rem">
			<Fragment component="p">
				Представляю вашій увазі технічну доповідь-розповідь про одвічну
				проблему інтернету — відображення тексту.
			</Fragment>
			<Fragment component="p">відображення тексту</Fragment>
		</RemSlide>
	);
}
