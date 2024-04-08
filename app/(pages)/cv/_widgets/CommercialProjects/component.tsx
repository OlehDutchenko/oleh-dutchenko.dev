import { PageFooter } from '@/(pages)/cv/_components/PageFooter';
import { PropsWithChildren, ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function CommercialProjects(): ReactElement {
	return (
		<Section title="Commercial projects experience">
			<table className="cv-table cv-table--double">
				<tbody>
					<tr>
						<td width="70%">
							<p>
								<b>Frontend Tech Lead at Wezom</b>
								<br />4 successful projects that I led.
							</p>
							<ProjectsDomains>
								Real Estate, News platform, Energy carriers
							</ProjectsDomains>
							<CoreStack>
								TypeScript, GraphQL, React, Next.js, React Hook
								Form, Vitest / Jest, <br /> MUI / Ant Design,
								Storybook
							</CoreStack>
							<br />
						</td>
						<td>
							<div className="cv-block-subtitle">
								<p>
									March 2020 - Present,
									<br />
									{currentDuration()}
								</p>
							</div>
						</td>
					</tr>
					<tr>
						<td width="70%">
							<p>
								<b>Frontend Developer at Wezom</b>
								<br />7 finished projects in which I was
								involved.
							</p>
							<ProjectsDomains>
								E-commerce, CRM and Real Estate
							</ProjectsDomains>
							<CoreStack>
								EJS, Sass (SCSS), Webpack, Blade (Laravel),
								jQuery and later React
							</CoreStack>
							<br />
						</td>
						<td>
							<div className="cv-block-subtitle">
								<p>
									February 2017 - March 2020,
									<br />2 years 8 months
								</p>
							</div>
						</td>
					</tr>
					<tr>
						<td width="70%">
							<p>
								<b>HTML Coder at Wezom</b>
								<br />
								More than 20 projects in which I was
								participated.
							</p>
							<ProjectsDomains>
								Tourism, Security services, Cleaning services,
								E-commerce and Promo sites
							</ProjectsDomains>
							<CoreStack>
								HTML & CSS, jQuery, Sass (SCSS), Jade (Pug),
								Gulp, Webpack
							</CoreStack>
						</td>
						<td>
							<div className="cv-block-subtitle">
								<p>
									March 2014 - August 2017,
									<br />3 years 6 months
								</p>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<PageFooter height={30} />
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
			{props.children}
		</p>
	);
}

function CoreStack(props: PropsWithChildren): ReactElement {
	return (
		<div>
			<span className="cv-block-subtitle">Core technology stack:</span>
			{props.children}
		</div>
	);
}

function Wezom(): ReactElement {
	return <>Wezom</>;
}
