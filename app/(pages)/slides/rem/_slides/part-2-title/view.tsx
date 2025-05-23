import { RemSlide } from '@slides/rem/_components/rem-slide';
import clsx from 'clsx';
import styles from './styles.module.css';

export function Part2Title() {
	return (
		<RemSlide
			transition="zoom-in zoom-out"
			bgColor="darker"
			bgImage="wavesOfDarkWaterGif"
			variant="fade-in-nth-child"
		>
			<h1 className={clsx(styles.title, 'font-title')}>
				<span className={styles.t1}>
					<span className="child child-1">Частина II</span>
					<b className="child child-6">Дві вежі</b>{' '}
				</span>
				<span className={styles.t2}>
					<b className="child child-9">px - rem</b>
				</span>
			</h1>
		</RemSlide>
	);
}
