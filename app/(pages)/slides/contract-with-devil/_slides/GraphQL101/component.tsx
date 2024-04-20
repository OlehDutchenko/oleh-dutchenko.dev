import { ReactElement } from 'react';
import { Fragment } from '../../_components/Fragment';
import { RollingFragment } from '../../_components/RollingFragment';
import { Section } from '../../_components/Section';

export function GraphQL101(): ReactElement {
	return (
		<>
			<Section bgColor="light" className="flex-section">
				<h3>
					Як в &quot;інтернеті&quot; нам рекомендують працювати з
					GraphQL та TypeScript <br /> <big>?</big>
				</h3>
				<ul>
					<RollingFragment component="li" fx="fade-up">
						Виконайте інтроспекцію GraphQL
					</RollingFragment>
					<RollingFragment component="li" fx="fade-up">
						Згенеруйте TypeScript Типи <em>(контракти)</em>
					</RollingFragment>
				</ul>
			</Section>
			<Section bgColor="light" className="flex-section">
				<h3>
					Як нам рекомендують використовувати отримані Контракти{' '}
					<br />
					<big>?</big>
				</h3>
				<RollingFragment component="p">
					<em>Тут і зараз! </em>&nbsp;
				</RollingFragment>
				<ul>
					<RollingFragment component="li">
						Імпортуємо типи в наші компоненти!
					</RollingFragment>
					<RollingFragment component="li">
						Виконуємо GraphQL операцію
					</RollingFragment>
					<RollingFragment component="li">
						&quot;Безпечно&quot; юзаюмо типізовані дані
					</RollingFragment>
				</ul>
			</Section>
		</>
	);
}
