import { PageFooter } from '@/(pages)/cv/_components/PageFooter';
import { PropsWithChildren, ReactElement } from 'react';
import { Block } from '../../_components/Block';
import { Section } from '../../_components/Section';

export function CommercialProjects(): ReactElement {
	return (
		<Section title="Commercial projects experience">
			<Block
				caption={`March 2020 - Present, ${currentDuration()}`}
				title={
					<>
						Frontend Tech Lead at <Wezom />
					</>
				}
			>
				<p>4 successful projects that I led.</p>
				<ProjectsDomains>
					Real Estate, News platform, CRM and ERP
				</ProjectsDomains>
				<CoreStack>
					TypeScript, GraphQL, React, Next.js, React Hook Form, <br />
					Vitest / Jest, MUI / Ant Design, Storybook
				</CoreStack>
			</Block>
			<Block
				caption="February 2017 - March 2020, 2 years 8 months"
				title={
					<>
						Frontend Developer at <Wezom />
					</>
				}
			>
				<p>7 finished projects in which I was involved.</p>
				<ProjectsDomains>
					E-commerce, CRM and Real Estate
				</ProjectsDomains>
				<CoreStack>
					EJS, Sass (SCSS), Webpack, Blade (Laravel), jQuery, Vue and
					later React
				</CoreStack>
			</Block>
			<Block
				caption="March 2014 - August 2017, 3 years 6 months"
				title={
					<>
						HTML Coder at <Wezom />
					</>
				}
			>
				<p>More than 20 projects in which I was participated.</p>
				<ProjectsDomains>
					Tourism, Security services, Cleaning services, E-commerce
					and Promo sites
				</ProjectsDomains>
				<CoreStack>
					HTML & CSS, jQuery, Sass (SCSS), Jade (Pug), Gulp, Webpack
				</CoreStack>
			</Block>
			<PageFooter page={1} height={5} />
		</Section>
	);
}

function currentDuration(): string {
	const now = new Date();
	const start = new Date(2020, 2, 1);
	let years = now.getFullYear() - start.getFullYear();
	let months = now.getMonth() - start.getMonth();
	if (months < 0) {
		years--;
		months += 12;
	}
	const monthLabel = months === 1 ? ' month' : ' months';
	const monthValue = months === 0 ? '' : ` ${months} ${monthLabel}`;
	return `${years} years ${monthValue}`;
}

function ProjectsDomains(props: PropsWithChildren): ReactElement {
	return (
		<p>
			<span className="cv-block-subtitle">Projects domains:</span>
			<br />
			{props.children}
		</p>
	);
}

function CoreStack(props: PropsWithChildren): ReactElement {
	return (
		<p>
			<span className="cv-block-subtitle">Core technology stack:</span>
			<br />
			{props.children}
		</p>
	);
}

function Wezom(): ReactElement {
	return (
		<a href="https://wezom.com/" target="_blank" rel="noopener noreferrer">
			Wezom
		</a>
	);
}
