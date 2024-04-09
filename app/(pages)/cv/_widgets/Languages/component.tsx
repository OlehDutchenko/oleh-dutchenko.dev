import { Details } from '@/(pages)/cv/_components/Details';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function Languages(): ReactElement {
	return (
		<Section title="Languages">
			<Details>Ukrainian, English (B1)</Details>
		</Section>
	);
}
