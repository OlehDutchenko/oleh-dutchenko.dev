import { RemSlide } from '@slides/rem/_components/rem-slide';
import clsx from 'clsx';
import styles from './styles.module.css';

export function Part3Title() {
	return (
		<RemSlide
			transition="zoom-in zoom-out"
			bgColor="darker"
			bgImage="wavesOfDarkWaterGif"
			variant="fade-in-nth-child"
		>
			<h1 className={clsx(styles.title, 'font-title')}>
				<span className={styles.t1}>
					<span className="child child-1">Частина III</span>
					<b className="child child-6">Повернення</b>{' '}
				</span>
				<span className={styles.t2}>
					<b className="child child-9">доступності</b>
				</span>
			</h1>
		</RemSlide>
	);
}
