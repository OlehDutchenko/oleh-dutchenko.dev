import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';
import clsx from 'clsx';
import styles from './styles.module.css';

export function Bio() {
	return (
		<>
			<section
				data-background-iframe="/static/slides-rem/bio.html"
				data-background-interactive
			/>

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
