import { ReactElement } from 'react';
import { Section } from '../../_components/Section';
import { SlashBlock } from '../../_components/SlashBlock';

export function MyTalkPromise(): ReactElement {
	return (
		<Section bgColor="darker">
			<h3>Наприкінці розповіді</h3>
			<SlashBlock left={<Left />} right={<Right />} />
		</Section>
	);
}

function Left(): ReactElement {
	return (
		<>
			я дам свою відповідь <br />
			на поставленне запитання
		</>
	);
}

function Right(): ReactElement {
	return (
		<>
			а ви зробите <br />
			власні висновки
		</>
	);
}
