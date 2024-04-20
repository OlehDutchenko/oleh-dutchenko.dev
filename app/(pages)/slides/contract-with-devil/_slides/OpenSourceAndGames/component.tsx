import { ReactElement } from 'react';
import { Section } from '../../_components/Section';
import { SlashBlock } from '../../_components/SlashBlock';

export function OpenSourceAndGames(): ReactElement {
	return (
		<Section bgColor="darker">
			<h3>Окрім основної діяльності</h3>
			<SlashBlock left={<Left />} right={<Right />} />
		</Section>
	);
}

function Left(): ReactElement {
	return (
		<>
			Займаюсь опенсоурсними <br />
			пет-проєктами: <br />
			<small>
				<br />
				<code>sort-css-media-queries</code>
				{' | '}
				<code>node-w3c-validator</code>
			</small>
		</>
	);
}

function Right(): ReactElement {
	return (
		<>
			та <br />
			граю <br />у відеоігри
		</>
	);
}
