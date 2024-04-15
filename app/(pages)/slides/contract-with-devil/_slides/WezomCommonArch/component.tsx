import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

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
		</>
	);
}
