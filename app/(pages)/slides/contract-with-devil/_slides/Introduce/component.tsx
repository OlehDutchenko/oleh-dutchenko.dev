import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function Introduce(): ReactElement {
	return (
		<Section bgColor="dark">
			<p>
				<small>для початку</small>
				<br />
				дозвольте представитись
			</p>
		</Section>
	);
}
