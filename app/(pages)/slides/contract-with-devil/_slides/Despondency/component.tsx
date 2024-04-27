import { ReactElement } from 'react';
import { Fragment } from '../../_components/Fragment';
import { Section } from '../../_components/Section';

export function Despondency(): ReactElement {
	return (
		<>
			<Section bgColor="darker">
				<p>
					Усвідомлення ситуації <br /> призвело до зневіри в обраному
					шляху
				</p>
			</Section>
			<Section bgColor="darker">
				<p>
					Захопившись технологією, <br />{' '}
					<Fragment>сліпо слідував практикам,</Fragment> <br />{' '}
					<Fragment>котрі потрібно було переосмислити.</Fragment>
				</p>
			</Section>
		</>
	);
}
