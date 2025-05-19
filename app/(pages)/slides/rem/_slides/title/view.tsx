import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';
import clsx from 'clsx';
import styles from './styles.module.css';

export function Title() {
	return (
		<>
			<RemSlide bgColor="darker" width100p bgImage="wavesOfDarkWaterGif">
				<Fragment fx="fade-up" className="font-title">
					<em>Технічна доповідь-розповідь</em>
				</Fragment>
			</RemSlide>
			<RemSlide bgColor="darker" width100p bgImage="wavesOfDarkWaterGif">
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
