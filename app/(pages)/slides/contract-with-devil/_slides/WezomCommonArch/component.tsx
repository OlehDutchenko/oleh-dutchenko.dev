import { ReactElement } from 'react';
import { RollingFragment } from '../../_components/RollingFragment';
import { Section } from '../../_components/Section';
import styles from './styles.module.css';

export function WezomCommonArch(): ReactElement {
	return (
		<>
			<Section bgColor="light">
				<p>
					Для більшості наших проєктів ми маємо доволі непогану та
					типову архітектуру, яка нагадує <br />
					“Чисту Архітектуру” Роберта Мартіна.
				</p>
			</Section>
			<Section bgColor="light" className={styles.section}>
				<p style={{ textAlign: 'left' }}>
					<small>
						На високому рівні системи у нас типові архітектурні кола
						з власними межами:
					</small>
				</p>
				<div style={{ textAlign: 'left' }}>
					<RollingFragment component="div" maxHeight={100}>
						<b>1. Визначені бізнес правила</b>, які є основними
						Сутностями системи. Ними керує бекенд.
					</RollingFragment>
					<br />
					<RollingFragment component="div" maxHeight={100}>
						<b>2. API</b>. Це є нашими Варіантами Використання
						визначених Сутностей.
					</RollingFragment>
					<br />
					<RollingFragment component="div">
						<b>3. Клієнти АПІ</b>: веб та/або мобільні застосунки.
					</RollingFragment>
				</div>
			</Section>
		</>
	);
}
