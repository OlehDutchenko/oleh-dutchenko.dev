import React from 'react';
import { Block } from '../../_components/Block';
import { Section } from '../../_components/Section';

export const Education: React.FC = () => {
	return (
		<Section title="Education">
			<Block
				caption="2005 - 2010"
				title={
					<>
						Kherson National Technical University, Graphic and
						Motion Designer, <br />
						Specialist degree
					</>
				}
			>
				<p>
					During my studies at the Design, I was introduced to the web
					development. After graduation, I worked as a motion designer
					for television. But after three years I switched to IT. And
					since then I still stay here.
				</p>
			</Block>
		</Section>
	);
};
