import { RemSlide } from '@slides/rem/_components/rem-slide';
import { Fragment } from '../../../_components/Fragment';

export function Intro() {
	return (
		<RemSlide bgColor="darker">
			<div className="font-title">
				<Fragment component="p" fx="fade-in-nth-child">
					<span>У самому</span>
					<span>серці</span>
					<span>інтернету,</span>
					<span>серед</span>
					<span>тисяч</span>
					<span>сторінок</span>
					<span>і екранів,</span>
					<span>браузери</span>
					<span>боронять</span>
					<span>право</span>
					<span>кожного</span>
					<span>— бачити</span>
					<span>текст.</span>
				</Fragment>
				<Fragment component="p" fx="fade-in-nth-child">
					<span>Але ця</span>
					<span>рівновага</span>
					<span>порушена.</span>
				</Fragment>
				<p>
					<Fragment fx="fade-in-nth-child">
						<span>Хтось…</span>
					</Fragment>{' '}
					<Fragment fx="fade-in-nth-child">
						<span>використав</span>
						<span>
							<code>px</code>
						</span>
					</Fragment>
				</p>
			</div>
			<Fragment component="p" fx="fade-in-nth-child" className="t-right">
				<span>
					<small className="op-60">
						<em>— ChatGPT</em>
					</small>
				</span>
			</Fragment>
		</RemSlide>
	);
}
