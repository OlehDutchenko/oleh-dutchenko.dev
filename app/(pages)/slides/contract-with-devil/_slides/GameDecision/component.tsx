import { AccentElement } from '@/_components/AccentElement';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function GameDecision(): ReactElement {
	return (
		<Section bgColor="darker">
			<AccentElement>
				<blockquote style={{ background: 'none' }}>
					<p>
						Обраний варіант, котрий, на перший погляд, здається не
						важливим - може мати колосальний вплив на фінальну
						розвʼязку гри
					</p>
				</blockquote>
			</AccentElement>
		</Section>
	);
}
