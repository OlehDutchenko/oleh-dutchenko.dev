import { AccentElement } from '@/_components/AccentElement';
import { ReactElement } from 'react';
import { RollingFragment } from '../../_components/RollingFragment';
import { Section } from '../../_components/Section';
import styles from './styles.module.css';

export function Question(): ReactElement {
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
							коли розробка проекту <br />
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
