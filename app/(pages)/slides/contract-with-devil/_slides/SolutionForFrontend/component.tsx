import { RollingFragment } from '@/(pages)/slides/contract-with-devil/_components/RollingFragment';
import { AccentElement } from '@/_components/AccentElement';
import { ReactElement } from 'react';
import { Fragment } from '../../_components/Fragment';
import { Section } from '../../_components/Section';
import styles from './styles.module.css';

export function SolutionForFrontend(): ReactElement {
	return (
		<>
			<Section bgColor="light" transition="slide-in slide-out">
				<p>
					Процес змін АПІ стабілізовано
					<br />
					<Fragment className="like-h3">А що по фронту?</Fragment>
				</p>
			</Section>
			<Section bgColor="light" className="flex-section">
				<h3>База даних - це деталь!</h3>
				<Fragment data-id="anim">
					<div className={styles.dbText}>
						<AccentElement>
							<blockquote>
								<footer>
									&quot;Чиста архітектура&quot;, Розділ 30
								</footer>
								<div style={{ marginTop: 12 }}>
									<RollingFragment component="div">
										База даних - це утиліта, що забезпечує
										доступ до даних.
									</RollingFragment>
									<RollingFragment component="div">
										Із погляду архітектури вона не має
										жодного значення,
									</RollingFragment>
									<RollingFragment component="div">
										це деталь, механізм{' '}
										<em>
											(який може, і буде, змінюватись)
										</em>
										.
									</RollingFragment>
									<RollingFragment
										component="div"
										maxHeight={100}
									>
										<div className={styles.dbTextAccent}>
											Не дозволяйте низькорівневим
											механізмам <br />
											просочуватись в архітектуру системи!
										</div>
									</RollingFragment>
								</div>
							</blockquote>
						</AccentElement>
					</div>
				</Fragment>
			</Section>
			<Section bgColor="light" className="flex-section">
				<h3>GraphQL - це ресурс даних!</h3>
				<RollingFragment>
					Це &quot;База Даних&quot; для клієнта (фронту)
				</RollingFragment>
			</Section>
			<Section bgColor="light" className="flex-section">
				<h3>Як мінімізувати вплив БД?</h3>
				<RollingFragment maxHeight={100}>
					Працювати через &quot;шлюз&quot;, <br />
					який відділяє логіку від ресурсу.
				</RollingFragment>
			</Section>
			<Section bgColor="light" className="flex-section">
				<h3>Наше рішення:</h3>
				<ul style={{ margin: '0 -3rem' }}>
					<RollingFragment component="li">
						Прибрати фрагменти GraphQL з коду компонентів
					</RollingFragment>
					<RollingFragment component="li" maxHeight={100}>
						Вирішити задачу абстраговано від АПІ <br /> описавши
						власний інтерфейс та реалізувавши його
					</RollingFragment>
					<RollingFragment component="li">
						На верхньому рівні виконати запит
					</RollingFragment>
					<RollingFragment component="li">
						Нормалізувати його в очікуваний формат
					</RollingFragment>
					<RollingFragment component="li">
						Передати результат в компоненти
					</RollingFragment>
				</ul>
			</Section>
		</>
	);
}
