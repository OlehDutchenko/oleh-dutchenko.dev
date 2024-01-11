import React from 'react';
import { Block } from '../../_components/Block';
import { Section } from '../../_components/Section';

export const CommercialProjects: React.FC = () => {
	return (
		<Section title="Commercial projects experience">
			<Block
				caption="March 2020 - Present"
				title={
					<>
						Frontend Tech Lead at <Wezom />
					</>
				}
			>
				<p>4 successful projects that I led.</p>
				<CoreStack>
					TypeScript, GraphQL, React, Next.js, React Hook Form, <br />
					Vitest / Jest, MUI / Ant Design, Storybook
				</CoreStack>
			</Block>
			<Block
				caption="February 2017 - March 2020"
				title={
					<>
						Frontend Developer at <Wezom />
					</>
				}
			>
				<p>7 finished projects in which I was involved.</p>
				<CoreStack>
					EJS, Sass (SCSS), Webpack, Blade (Laravel), <br />
					jQuery, Vue and later React
				</CoreStack>
			</Block>
			<Block
				caption="March 2014 - February 2017"
				title={
					<>
						HTML Coder at <Wezom />
					</>
				}
			>
				<p>More than 20 projects in which I was participated.</p>
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
			<small>
				Core technology stack:
				<br />
				{props.children}
			</small>
		</p>
	);
}

function Wezom(): React.ReactElement {
	return (
		<a href="https://wezom.com/" target="_blank" rel="noopener noreferrer">
			Wezom
		</a>
	);
}
