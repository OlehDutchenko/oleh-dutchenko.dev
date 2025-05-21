import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';
import clsx from 'clsx';
import styles from './styles.module.css';

export function Part1Title() {
	return (
		<>
			<RemSlide
				transition="zoom-in zoom-out"
				bgColor="darker"
				bgImage="wavesOfDarkWaterGif"
			>
				<p className="font-title">
					Це історія про давню,
					<br />
					але досі актуальну проблему Інтернету <br /> — відображення
					тексту.
				</p>
			</RemSlide>

			<RemSlide
				transition="fade-in zoom-out"
				bgColor="darker"
				width100p
				bgImage="wavesOfDarkWaterGif"
				variant="fade-in-nth-child"
			>
				<h1 className={clsx(styles.title, 'font-title')}>
					<span className={styles.t1}>
						<b className="child child-6">Братство</b>{' '}
						<span className="child child-1">Частина I</span>
					</span>
					<span className={styles.t2}>
						<b className="child child-9">Доступності</b>
					</span>
				</h1>
			</RemSlide>
		</>
	);
}
