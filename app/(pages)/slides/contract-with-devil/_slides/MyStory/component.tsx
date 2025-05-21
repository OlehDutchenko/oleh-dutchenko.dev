import { ReactElement } from 'react';
import { Fragment } from '../../../_components/Fragment';
import { Section } from '../../../_components/Section';

export function MyStory(): ReactElement {
	return (
		<>
			<Section bgColor="light" transition="slide-in slide-out">
				<h3>
					Проте у &quot;правила залежностей&quot; <br />є і друга
					сторона медалі
				</h3>
				<Fragment component="p">
					Яка проявляється у наслідках залежності зовнішнього кола від
					внутрішнього
				</Fragment>
			</Section>
			<Section bgColor="accent" transition="zoom-in slide-out">
				<p>Акцент моєї доповіді:</p>
				<h3>Залежність Клієнта від АПІ</h3>
				<p>&nbsp;</p>
			</Section>
			<Section bgColor="darker" transition="zoom-in zoom-out">
				<h3>Моя історія</h3>
				<hr style={{ width: '10%' }} />
				<p>
					<Fragment>Про захоплення технологією,</Fragment>
					<br />
					<Fragment>про зневіру в обраному шляху</Fragment>
					<br />
					<Fragment>та &quot;просвітлення&quot; 😇</Fragment>
				</p>
			</Section>
		</>
	);
}
