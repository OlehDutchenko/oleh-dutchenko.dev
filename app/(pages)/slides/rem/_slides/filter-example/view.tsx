import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';
import styles from './styles.module.css';

export function FilterExample() {
	return (
		<>
			<RemSlide transition="zoom-in zoom-out" bgColor="dark">
				<p>
					Звучить просто: <br />
					використовуйте <code>rem</code>, і все буде гнучко
				</p>
			</RemSlide>
			<RemSlide transition="zoom-in slide-out" bgColor="dark">
				<p>Але чи дійсно це так?</p>
			</RemSlide>
			<RemSlide transition="slide-in zoom-out" bgColor="lighter">
				<p>
					Приклад <br /> на основі більш складного UI
				</p>
			</RemSlide>
			<RemSlide transition="zoom-in slide-out" bgColor="lighter">
				<p>
					<img src="/static/slides-rem/filter-px.png" />
				</p>
				<p>
					Початково використовувався <code>px</code>
				</p>
			</RemSlide>
			<RemSlide transition="slide-in zoom-out" bgColor="lighter">
				<video
					src="/static/slides-rem/filter-rem.mp4"
					controls
					loop
					muted
					playsInline
					webkit-playsinline="true"
					className={styles.video}
					width="1260"
					height="305"
				/>
				<p>
					Після &quot;переїзду&quot; на <code>rem</code>
				</p>
			</RemSlide>
		</>
	);
}
