import { Fragment } from '@slides/_components/Fragment';
import { RemSlide } from '@slides/rem/_components/rem-slide';
import styles from './styles.module.css';

export function ChallengeUx() {
	return (
		<>
			<RemSlide transition="zoom-in zoom-out" bgColor="darker">
				<p>
					Які виклики можуть постати перед нами, <br /> на шляху до
					імплементації механізму "Масштабування тексту"?
				</p>
			</RemSlide>
			<RemSlide transition="zoom-in slide-out" bgColor="dark">
				<div className="op-50">
					<small>
						<small>Виклик I</small>
					</small>
				</div>
				<h3>Дизайн макети</h3>
				<Fragment component="p">
					А точніше &mdash; люди які їх створюють ;)
				</Fragment>
			</RemSlide>
			<RemSlide transition="slide-in slide-out" bgColor="lighter">
				<p>Що варто пояснити дизайнерам?</p>
				<div style={{ fontSize: '0.7em', paddingBottom: '1em' }}>
					<ul>
						<Fragment component="li">
							Відмовитись від <code>px</code> для тексту, на
							користь <code>rem</code>;
						</Fragment>
						<Fragment component="li">
							Якщо це не можливо, то використовувати значення
							кратні 2 або 4 пікселям{' '}
							<em>
								(для конвертації в rem: <code>0.125rem</code>,{' '}
								<code>1.25rem</code> тощо)
							</em>
							;
						</Fragment>
						<Fragment component="li">
							Для дотичних параметрів{' '}
							<em>(текстова лінія, відступи та інше)</em>{' '}
							використовувати відносні значення: <code>%</code>,{' '}
							<code>em</code> або <code>rem</code>, <br />
							або, знову ж таки, кратні значення в пікселях
						</Fragment>
						<Fragment component="li">
							Не вимагати фіксованого вигляду елементів, особливо
							з обмеженнями по висоті.
						</Fragment>
						<Fragment component="li">
							Дати свободу: інтерфейси можуть адаптуватись, без
							зміни розміру екрану{' '}
							<em>(це не Responsive Design)</em>;
						</Fragment>
					</ul>
				</div>
			</RemSlide>
			<RemSlide transition="slide-in slide-out" bgColor="lighter">
				<p>
					<small className="op-70">
						Основна задача: донести думку,
					</small>{' '}
					<br />
					що інтерфейси можуть мати <u>варіативність</u> відображення
				</p>
			</RemSlide>
			<RemSlide transition="slide-in slide-out" bgColor="lighter">
				<div className={styles.images}>
					<img
						src="/static/slides-rem/img.png"
						alt="example 1"
						width="600"
						height="171"
						className={styles.image}
					/>
					<Fragment component="div">
						<img
							src="/static/slides-rem/img_1.png"
							alt="example 2"
							className={styles.image1}
						/>
						<img
							src="/static/slides-rem/img_2.png"
							alt="example 3"
							className={styles.image2}
						/>
						<img
							src="/static/slides-rem/img_3.png"
							alt="example 3"
							className={styles.image3}
						/>
						<img
							src="/static/slides-rem/img_4.png"
							alt="example 4"
							className={styles.image4}
						/>
					</Fragment>
				</div>
			</RemSlide>

			<RemSlide transition="slide-in slide-out" bgColor="lighter">
				<p>Не просіть відтворювати всі варіанти в макеті</p>
				<p>
					<small className="op-60">
						<em>Маю особистий, невдалий, досвід ;)</em>
					</small>
				</p>
			</RemSlide>

			<RemSlide transition="slide-in slide-out" bgColor="lighter">
				<p>Достатньо одного &quot;еталонного&quot; варіанту</p>
				<p>
					<small className="op-60">
						<em>З розумінням його можливих змін</em>
					</small>
				</p>
			</RemSlide>
		</>
	);
}
