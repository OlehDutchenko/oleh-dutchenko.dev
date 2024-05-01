import { AccentElement } from '@/_components/AccentElement';
import clsx from 'clsx';
import { ReactElement } from 'react';
import { Fragment } from '../../_components/Fragment';
import {
	HighLevelArch,
	highLevelArchStyles as _,
} from '../../_components/HighLevelArch';
import { Section } from '../../_components/Section';
import styles from './styles.module.css';

export function DepsRuleIntro(): ReactElement {
	return (
		<>
			<Section
				bgColor="light"
				transition="zoom-in slide-out"
				className={clsx(
					styles.sectionMain,
					styles.makeCircles,
					_.intro
				)}
			>
				<HighLevelArch />
				<Fragment dataSectionClassName={_.showT1} />
				<Fragment dataSectionClassName={_.showT2} />
				<Fragment dataSectionClassName={_.showT3} />
				<Fragment
					fx="fade-out"
					dataSectionClassName={_.initialStructure}
					component="div"
					className={clsx(styles.introParagraph)}
				>
					Типова архітектура <br />з поділом на високорівневі кола:
				</Fragment>
				<Fragment
					component="div"
					className={clsx(styles.over, _.overText)}
					dataSectionClassName={_.withOverText}
				>
					<AccentElement>
						<blockquote>
							<div className={styles.block}>
								<Fragment fx="fade-out" component="div">
									<p style={{ marginTop: 0 }}>
										“Залежності у вихідному коді мають бути
										спрямовані всередину, у бік
										високорівневих політик.”
									</p>
									<footer style={{ paddingBottom: '2rem' }}>
										Правило залежностей “Чистої Архітектури”
										Р. Мартіна
									</footer>
								</Fragment>
								<Fragment
									component="div"
									fx="fade-in-then-out"
									dataSectionClassName={_.showGreenArrows}
								>
									<footer>
										<i>Якщо простіше, то:</i>
									</footer>
									<p>
										“Вектор залежностей між “колами” має
										бути направлений <br />
										від зовнішнього кола до внутрішнього:”
									</p>
								</Fragment>
								<Fragment
									component="div"
									fx="fade-in-then-out"
									dataSectionClassName={_.showRedArrows}
								>
									<footer>
										<i>Якщо ще простіше, то:</i>
									</footer>
									<p>
										“Сутності не мають залежати від
										Варіантів використання, <br />а Варіанти
										не мають залежати від Клієнтів та їх UI”
									</p>
								</Fragment>
							</div>
						</blockquote>
					</AccentElement>
				</Fragment>
				<Fragment dataSectionClassName={_.outro} />
				<Fragment component="div" className={clsx(styles.over2)}>
					<AccentElement>
						<blockquote>
							<div className={styles.block}>
								<div>
									<footer>
										<i>GraphQL це про </i>
									</footer>
									<div>Дані та відносини між ними</div>
								</div>
							</div>
						</blockquote>
					</AccentElement>
				</Fragment>
			</Section>
		</>
	);
}
