import { RollingFragment } from '@/(pages)/slides/contract-with-devil/_components/RollingFragment';
import { AccentElement } from '@/_components/AccentElement';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';
import styles from './styles.module.css';

export function AccToDepsRule(): ReactElement {
	return (
		<>
			<Section bgColor="light">
				<p>
					Такий поділ дозволяє нам відповідати <br />
					“Правилу залежностей”.
					<br />
					<br />
					<small>
						описаному в тій самій “Чистій архітектурі” Р. Мартіна
					</small>
				</p>
			</Section>
			<Section bgColor="light">
				<AccentElement>
					<blockquote>
						<p>
							“Залежності у вихідному коді мають бути спрямовані
							всередину, у бік високорівневих політик.”
						</p>
						<footer>Правило залежностей</footer>
					</blockquote>
				</AccentElement>
			</Section>
			<Section bgColor="light">
				<AccentElement>
					<blockquote>
						<footer>
							<i>Якщо простіше, то:</i>
						</footer>
						<p>
							“Вектор залежностей між “колами” має бути
							направлений <br />
							від зовнішнього кола до внутрішнього:”
						</p>
					</blockquote>
				</AccentElement>
			</Section>
			<Section bgColor="light">
				<AccentElement>
					<blockquote>
						<footer>
							<i>Якщо ще простіше, то:</i>
						</footer>

						<p>
							“Сутності не мають залежати від Варіантів
							використання, <br />а Варіанти не мають залежати від
							Клієнтів та їх UI”
						</p>
					</blockquote>
				</AccentElement>
			</Section>
			<Section bgColor="highlight">
				<h3>GraphQL</h3>
				<hr style={{ width: '10%' }} />
				<p>
					Вписується дуже добре в цю систему. <br />
					За рахунок його операцій, ми реалізуємо необхідні нам
					Варіанти використання. І вони абстраговані <br />
					від UI, як і вимагає “Правило залежностей“.
				</p>
			</Section>
			<Section bgColor="accent">
				<h3>Проте у правила є друга сторона</h3>
			</Section>
			<Section bgColor="accent" className={styles.sectionAttention}>
				<RollingFragment component="p">
					<small>Саме на цю проблему хочу звернути вашу увагу!</small>
				</RollingFragment>
				<AccentElement>
					<blockquote style={{ background: 'none' }}>
						<p>
							Кожне “коло” <br />
							залежить від його внутрішнього “сусіда”
						</p>
					</blockquote>
				</AccentElement>
			</Section>
		</>
	);
}
