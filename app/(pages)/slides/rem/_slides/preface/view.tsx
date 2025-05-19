import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';

export function Preface() {
	return (
		<RemSlide bgColor="darker" width100p bgImage="wavesOfDarkWaterGif">
			<div className="font-title">
				<Fragment component="p" fx="fade-in-nth-child">
					<span>«У самому</span>
					<span>серці</span>
					<span>інтернету,</span>
					<span>серед</span>
					<span>тисяч</span>
					<span>сторінок</span>
					<span>і екранів,</span>
				</Fragment>
				<Fragment component="p" fx="fade-in-nth-child">
					<span>браузери</span>
					<span>боронять</span>
					<span>право</span>
					<span>кожного —</span>
					<span>бачити</span>
					<span>текст.</span>
				</Fragment>
				<Fragment component="p" fx="fade-in-nth-child">
					<span>Але</span>
					<span></span>
					<span>ця</span>
					<span>рівновага</span>
					<span>порушена.</span>
				</Fragment>
				<p>
					<Fragment fx="fade-in-nth-child">
						<span>Хтось…</span>
						<span></span>
						<span></span>
						<span></span>
						<span>використав</span>
						<span>
							<code>px</code>»
						</span>
					</Fragment>
				</p>
			</div>
			<Fragment component="p" fx="fade-in-nth-child" className="t-right">
				<span>
					<small className="op-60">
						<em>
							— ChatGPT, <small>2025 р.</small>
						</em>
					</small>
				</span>
			</Fragment>
		</RemSlide>
	);
}
