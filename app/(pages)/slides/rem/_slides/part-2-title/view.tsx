import { RemSlide } from '@slides/rem/_components/rem-slide';
import clsx from 'clsx';
import styles from './styles.module.css';

export function Part2Title() {
	return (
		<RemSlide
			transition="zoom-in fade-out"
			bgColor="darker"
			width100p
			bgImage="wavesOfDarkWaterGif"
			variant="fade-in-nth-child"
		>
			<h1 className={clsx(styles.title, 'font-title')}>
				<span className={styles.t1}>
					<b className="child child-6">Дві вежі</b>{' '}
					<span className="child child-1">Частина II</span>
				</span>
				<span className={styles.t2}>
					<b className="child child-9">px - rem</b>
				</span>
			</h1>
		</RemSlide>
	);
}
