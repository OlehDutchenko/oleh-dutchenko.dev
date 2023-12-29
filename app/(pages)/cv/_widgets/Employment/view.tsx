import React from 'react';
import { Block } from '../../_components/Block';
import { PageFooter } from '../../_components/PageFooter';
import { Section } from '../../_components/Section';

export const Employment: React.FC = () => {
	return (
		<Section title="Employment history">
			<Block
				caption="March 2020 - Present"
				title={
					<>
						Frontend Tech Lead at <Wezom />
					</>
				}
			/>
			<Block
				caption="February 2017 - March 2020"
				title={
					<>
						Frontend Developer at <Wezom />
					</>
				}
			/>
			<Block
				caption="March 2014 - February 2017"
				title={
					<>
						HTML Coder at <Wezom />
					</>
				}
			/>
			<PageFooter height={60} page={1} />
		</Section>
	);
};

function Wezom(): React.ReactElement {
	return (
		<a href="https://wezom.com/" target="_blank" rel="noopener noreferrer">
			Wezom
		</a>
	);
}
