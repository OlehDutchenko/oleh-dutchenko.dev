import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';
import clsx from 'clsx';
import styles from './styles.module.css';

export function Part1Title() {
	return (
		<>
			<RemSlide
				transition="fade-in zoom-out"
				bgColor="darker"
				bgImage="wavesOfDarkWaterGif"
			>
				<Fragment component="p" className="font-title">
					Це історія про давню,
					<br />
					але досі актуальну проблему Інтернету <br /> — відображення
					тексту.
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
						<b className="child child-6">Братство</b>{' '}
						<span className="child child-1">Частина I</span>
					</span>
					<span className={styles.t2}>
						<b className="child child-9">Доступності</b>
					</span>
				</Fragment>
			</RemSlide>
		</>
	);
}
