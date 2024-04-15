import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function MyStory(): ReactElement {
	return (
		<Section bgColor="darker" transition="zoom-in zoom-out">
			<h3>Моя історія</h3>
			<hr style={{ width: '10%' }} />
			<p>
				Про захоплення технологією, <br />
				про зневіру в обраному шляху <br />
				та &quot;просвітлення&quot; 😎
			</p>
		</Section>
	);
}
