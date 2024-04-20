import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function WezomCommonArch(): ReactElement {
	return (
		<>
			<Section bgColor="light">
				<p>
					Для більшості наших проєктів <br />
					ми маємо архітектуру, яка нагадує <br />
					“Чисту Архітектуру” Роберта Мартіна.
				</p>
			</Section>
		</>
	);
}
