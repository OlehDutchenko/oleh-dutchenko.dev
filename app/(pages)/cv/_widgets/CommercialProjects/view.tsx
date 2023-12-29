import React from 'react';
import { Block } from '../../_components/Block';
import { Section } from '../../_components/Section';

export const CommercialProjects: React.FC = () => {
	return (
		<Section title="Commercial projects experience">
			<Block
				caption="March 2020 - Present"
				title="4 successful projects that I led as a Frontend Tech Lead"
			>
				<CoreStack>
					TypeScript, GraphQL, React, Next.js, React Hook Form, <br />
					Vitest / Jest, MUI / Ant Design
				</CoreStack>
			</Block>
			<Block
				caption="February 2017 - March 2020"
				title="7 finished projects in which I was involved as Frontend developer"
			>
				<CoreStack>
					EJS, Sass (SCSS), Webpack, Blade (Laravel), <br />
					jQuery, Vue and later React
				</CoreStack>
			</Block>
			<Block
				caption="March 2014 - February 2017"
				title="More than 20 projects in which I participated as an HTML coder"
			>
				<CoreStack>
					HTML & CSS, jQuery, Sass (SCSS), Jade (Pug), Gulp, Webpack
				</CoreStack>
			</Block>
		</Section>
	);
};

function CoreStack(props: React.PropsWithChildren): React.ReactElement {
	return (
		<p>
			<small>Core technology stack:</small>
			<br />
			{props.children}
		</p>
	);
}
