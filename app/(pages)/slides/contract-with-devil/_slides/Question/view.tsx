import { ReactElement } from 'react';
import { AccentElement } from '../../_components/AccentElement';
import { Fragment } from '../../_components/Fragment';
import { RollingFragment } from '../../_components/RollingFragment';
import { Section } from '../../../_components/Section';
import styles from './styles.module.css';

interface Props {
	withAnswer?: boolean;
}

export function Question({ withAnswer }: Props): ReactElement {
	if (withAnswer) {
		return (
			<>
				<Section bgColor="darker">
					<AccentElement>
						<p
							className="question"
							style={{ lineHeight: 1.5, padding: '0 4rem' }}
						>
							Чи може{' '}
							<span style={{ borderBottom: '1px solid' }}>
								технологія
							</span>{' '}
							призвести до ситуації, коли розробка проєкту стає
							настільки складною та нестерпною, що подальша робота
							здається абсолютно неможливою?
						</p>
					</AccentElement>
				</Section>
				<Section bgColor="darker" className="flex-section">
					<h1>Ні!</h1>
					<RollingFragment>
						Сліпо слідуючи за своїми захопленнями,
					</RollingFragment>
					<RollingFragment>
						<span style={{ borderBottom: '1px solid' }}>
							розробники
						</span>{' '}
						самі ведуть себе в пастку!
					</RollingFragment>
				</Section>
				<Section bgColor="accent" className="flex-section">
					<h1
						style={{
							fontSize: 68,
							margin: '0 -5rem',
						}}
					>
						&quot;Диявол ховається в деталях&quot;
					</h1>
					<Fragment component="p">
						Не давайте низькорівневим складовим, <br /> впливати на
						суть вашого завдання
					</Fragment>
				</Section>
				<Section bgColor="dark" className="flex-section">
					<h1>Технологія</h1>
					<Fragment>
						Це інструмент, який не дає конкретного рішення.
						<br />
						<Fragment>Це напрям, яким можна піти, </Fragment>
						<Fragment>
							а як саме ви будете долати цей шлях{' '}
						</Fragment>
						<Fragment>- залежить тільки від вас!</Fragment>
					</Fragment>
				</Section>
			</>
		);
	}
	return (
		<Section bgColor="darker" className={styles.section}>
			<p className="font-weight-light">
				<small>Питання до аудиторії:</small>
			</p>
			<div className="fragment _no-will-change">
				<AccentElement>
					<p
						className="question"
						style={{ lineHeight: 1.5, padding: '0 4rem' }}
					>
						<span>
							Чи може{' '}
							<span style={{ borderBottom: '1px solid' }}>
								технологія
							</span>{' '}
							призвести до ситуації,{' '}
						</span>
						<RollingFragment maxHeight={100}>
							коли розробка проєкту <br />
							стає настільки складною та нестерпною,
						</RollingFragment>
						<RollingFragment maxHeight={100}>
							що подальша робота здається <br />
							абсолютно неможливою?
						</RollingFragment>
					</p>
				</AccentElement>
			</div>
		</Section>
	);
}
