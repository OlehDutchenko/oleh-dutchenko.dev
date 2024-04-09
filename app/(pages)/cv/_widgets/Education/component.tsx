import { Details } from '@/(pages)/cv/_components/Details';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function Education(): ReactElement {
	return (
		<Section title="Education">
			<Details
				title="Kherson National Technical University"
				aside="2005 - 2010"
			>
				Graphic and Motion Designer, <br /> Specialist degree
			</Details>
		</Section>
	);
}
