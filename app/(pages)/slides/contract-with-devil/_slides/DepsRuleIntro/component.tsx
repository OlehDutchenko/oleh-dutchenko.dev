import { RollingFragment } from '@/(pages)/slides/contract-with-devil/_components/RollingFragment';
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
				transition="zoom-in zoom-out"
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
					<small>
						На високому рівні системи у нас типові архітектурні кола
						з власними межами:
					</small>
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
										Правило залежностей
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
			</Section>
			<Section bgColor="highlight" transition="zoom-in zoom-out">
				<h3>GraphQL</h3>
				<hr style={{ width: '10%' }} />
				<p>
					Вписується дуже добре в цю систему. <br />
					За рахунок його операцій, ми реалізуємо необхідні нам
					Варіанти використання. І вони абстраговані <br />
					від UI, як і вимагає “Правило залежностей“.
				</p>
			</Section>
			<Section bgColor="accent" transition="zoom-in zoom-out">
				<h3>
					Проте у &quot;правила залежностей&quot; <br />є і друга
					сторона медалі
				</h3>
			</Section>
			<Section
				bgColor="accent"
				className={styles.sectionAttention}
				transition="zoom-in zoom-out"
			>
				<AccentElement>
					<blockquote style={{ background: 'none' }}>
						<p>
							Кожне зовнішнє “коло” <br />
							залежить від його внутрішнього “сусіда”
						</p>
					</blockquote>
				</AccentElement>
				<RollingFragment component="p">
					<small>Саме на цю проблему хочу звернути вашу увагу!</small>
				</RollingFragment>
				<RollingFragment component="p">
					<b>Залежність UI від АПІ</b>
				</RollingFragment>
			</Section>
		</>
	);
}
