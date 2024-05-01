import { RollingFragment } from '../../_components/RollingFragment';
import { ReactElement } from 'react';
import { Fragment } from '../../_components/Fragment';
import { Section } from '../../_components/Section';

export function SolutionResult(): ReactElement {
	return (
		<>
			<Section bgColor="light" className="flex-section">
				<h3>Цілі:</h3>
				<ul style={{ margin: '0 -3rem' }}>
					<RollingFragment component="li">
						Мінімізувати вплив GraphQL на фронт
						<Fragment>&nbsp;✅&nbsp;</Fragment>
					</RollingFragment>
					<RollingFragment component="li">
						Вносити зміни <em>&quot;швидко&quot;</em>
						<Fragment>&nbsp;✅&nbsp;</Fragment>
					</RollingFragment>
				</ul>
			</Section>
			<Section bgColor="light" className="flex-section">
				<h3>Додатковий профіт:</h3>
				<ul style={{ margin: '0 -3rem' }}>
					<RollingFragment component="li">
						Асинхронність розробки: не чекаємо АПІ
					</RollingFragment>
					<RollingFragment component="li">
						Окреме тестування логіки Віджетів
					</RollingFragment>
					<RollingFragment component="li">
						Окреме тестування &quot;нормалізаторів&quot;
					</RollingFragment>
					<RollingFragment component="li">
						Перевикористання коду &quot;нормалізторів&quot;
					</RollingFragment>
				</ul>
			</Section>
			<Section bgColor="dark" className="flex-section">
				<div>Наша подорож продовжується...</div>
				<Fragment component="div">
					Нас чекає ще багато слизьких стежок!
				</Fragment>
				<Fragment component="div">
					Проте ми маємо власну відповідь на запитання...
				</Fragment>
			</Section>
		</>
	);
}
