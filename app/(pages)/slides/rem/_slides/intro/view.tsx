import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';
import clsx from 'clsx';
import styles from './styles.module.css';

export function Intro() {
	return (
		<>
			<RemSlide
				transition="fade-in zoom-out"
				bgColor="darker"
				bgImage="wavesOfDarkWaterGif"
				width100p
			>
				<Fragment component="div" fx="fade-out">
					<img
						src="/static/slides-contract-with-devil/js_rgb.png"
						alt=""
						width="175"
						height="171"
						aria-hidden="true"
						className={styles.logo}
					/>
				</Fragment>
				<div className="font-title">
					<Fragment component="div" fx="fade-in-nth-child">
						<p>
							<span className="child child-auto">«У самому</span>
							<span className="child child-auto">серці</span>
							<span className="child child-auto">інтернету,</span>
							<span className="child child-auto"></span>
							<span className="child child-auto"></span>
							<br />
							<span className="child child-auto">серед</span>
							<span className="child child-auto">тисяч</span>
							<span className="child child-auto">сторінок</span>
							<span className="child child-auto">і екранів,</span>
							<span className="child child-auto"></span>
							<span className="child child-auto"></span>
							<span className="child child-auto"></span>
							<span className="child child-auto"></span>
							<br />
							<span className="child child-auto">браузери</span>
							<span className="child child-auto">боронять</span>
							<span className="child child-auto">право</span>
							<span className="child child-auto">кожного —</span>
							<span className="child child-auto">бачити</span>
							<span className="child child-auto">текст.</span>
						</p>
					</Fragment>
					<Fragment component="p" fx="fade-in-nth-child">
						<span className="child child-auto">Але</span>
						<span className="child child-auto"></span>
						<span className="child child-auto">ця</span>
						<span className="child child-auto">рівновага</span>
						<span className="child child-auto">порушена.</span>
						<br />
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
				<Fragment
					component="p"
					fx="fade-in-nth-child"
					className="t-right"
				>
					<span className="child child-auto">
						<small className="op-60">
							<em>
								— ChatGPT, <small>2025 р.</small>
							</em>
						</small>
					</span>
				</Fragment>
			</RemSlide>
			<RemSlide
				transition="fade-in zoom-out"
				bgColor="darker"
				width100p
				bgImage="wavesOfDarkWaterGif"
			>
				<Fragment
					component="h1"
					fx="fade-in-nth-child"
					className={clsx(styles.title, 'font-title')}
				>
					<span className={styles.t1}>
						<b className="child child-1">Rem</b>{' '}
						<span className="child child-4">— одна одиниця,</span>
					</span>
					<span className={styles.t2}>
						<b className="child child-7">щоб правити</b>{' '}
						<span className="child child-10">всім</span>
					</span>
				</Fragment>
			</RemSlide>
		</>
	);
}
