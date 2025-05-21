import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';

export function Preface() {
	return (
		<RemSlide bgColor="darker" bgImage="wavesOfDarkWaterGif">
			<div className="font-title">
				<Fragment component="p" fx="fade-in-nth-child">
					<span className="child child-auto">«У самому</span>
					<span className="child child-auto">серці</span>
					<span className="child child-auto">інтернету,</span>
					<span className="child child-auto">серед</span>
					<span className="child child-auto">тисяч</span>
					<span className="child child-auto">сторінок</span>
					<span className="child child-auto">і екранів,</span>
					<span className="child child-auto"></span>
					<span className="child child-auto"></span>
					<span className="child child-auto"></span>
					<span className="child child-auto"></span>
					<span className="child child-auto">браузери</span>
					<span className="child child-auto">боронять</span>
					<span className="child child-auto">право</span>
					<span className="child child-auto">кожного —</span>
					<span className="child child-auto">бачити</span>
					<span className="child child-auto">текст.</span>
				</Fragment>
				<Fragment component="p" fx="fade-in-nth-child">
					<span className="child child-auto">Але</span>
					<span className="child child-auto"></span>
					<span className="child child-auto">ця</span>
					<span className="child child-auto">рівновага</span>
					<span className="child child-auto">порушена.</span>
					<span className="child child-auto"></span>
					<span className="child child-auto"></span>
					<span className="child child-auto">Хтось…</span>
					<span className="child child-auto"></span>
					<span className="child child-auto"></span>
					<span className="child child-auto"></span>
					<span className="child child-auto">використав</span>
					<span className="child child-auto">
						<code>px</code>»
					</span>
				</Fragment>
			</div>
			<Fragment component="p" fx="fade-in-nth-child" className="t-right">
				<span className="child child-auto">
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
