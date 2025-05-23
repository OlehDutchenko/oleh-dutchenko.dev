import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';
import clsx from 'clsx';
import styles from './styles.module.css';

export function Outro() {
	return (
		<>
			<RemSlide
				transition="fade-in zoom-out"
				bgColor="darker"
				bgImage="wavesOfDarkWaterGif"
				className="fade-in-nth-child"
			>
				<h1 className={clsx(styles.title, 'font-title')}>
					<b className="child child-1">Епілог</b>
				</h1>
			</RemSlide>
			<RemSlide
				transition="zoom-in zoom-out"
				bgColor="darker"
				bgImage="wavesOfDarkWaterGif"
			>
				<p>
					<code>REM</code> — це не просто одиниця вимірювання.
				</p>
				<Fragment component="p">
					<em>
						Це стратегія поваги до користувача, <br />
						спосіб зробити інтерфейси гнучкими, масштабованими,
						зручними для кожного.
					</em>
				</Fragment>
			</RemSlide>
			<RemSlide
				transition="zoom-in zoom-out"
				bgColor="darker"
				bgImage="wavesOfDarkWaterGif"
			>
				<div style={{ fontStyle: 'italic' }}>
					<p>"Верстайте не в пікселях, а в перспективах."</p>
					<Fragment component="p">
						Використовуйте <code>rem</code> для типографіки,
					</Fragment>
					<Fragment component="p">
						A <code>px</code> — лише там, де це справді потрібно.
					</Fragment>
					<Fragment component="p">
						Мисліть відносно. Мисліть доступно. <br /> Мисліть як
						"рем".
					</Fragment>
				</div>
			</RemSlide>
			<RemSlide
				transition="zoom-in zoom-out"
				bgColor="darker"
				bgImage="wavesOfDarkWaterGif"
			>
				<p>Дякую за увагу</p>
				<p>
					<img
						src="/static/external/linkedin.com.svg"
						className={styles.linkedin}
						aria-hidden="true"
					/>{' '}
					<a
						href="https://www.linkedin.com/in/oleh-dutchenko/"
						target="_blank"
						className={styles.link}
					>
						in/oleh-dutchenko
					</a>
				</p>
			</RemSlide>
		</>
	);
}
