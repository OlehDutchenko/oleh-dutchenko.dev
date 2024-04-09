import { Details } from '@/(pages)/cv/_components/Details';
import { ExternalLink } from '@/(pages)/cv/_components/ExternalLink';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function CommercialProjects(): ReactElement {
	return (
		<Section title="Projects experience">
			<Details
				title="Frontend Tech Lead at Wezom"
				aside={
					<>
						March 2020 - Present,
						<br />
						{currentDuration()}
					</>
				}
			>
				<p style={{ marginBottom: '1em' }}>
					I am expanding my experience in the development of large
					projects, <br /> which requires managing technical processes
					in a team, <br />
					understanding the feasibility of selected technologies and
					forecasting the consequences of their use
				</p>
				<p>
					<b>Energy carriers, NDA</b>
					<br />
					- Developing complex system of HRM, CRM and Billing.
					Separated to multi-zones and structured by monorepo.
					<br />- Providing Test Driven Development, Design and Code
					review (11 developers in 4 frontend teams). <br />-
					Technologies: React, Next.js, TurboRepo, TypeScript,
					GraphQL, Apollo Client, React Hook Form, Ant Design, Vitest,
					Storybook
				</p>
				<p>
					<b>News platform, NDA</b>
					<br />
					- Development of architecture for a public website and CMS
					<br />- Providing Design and Code review for frontend
					project team (3 developers). <br />- Technologies: CKEditor,
					CKFinder, React, Next.js, TypeScript, GraphQL, Apollo
					Client, Jest, React Hook Form, MUI
				</p>
				<p>
					<b>VoIP telephony, NDA</b>
					<br />
					- Creating a CRM system for managing VoIP: services,
					records, accounts and tariff;
					<br />- Creating a &quot;web soft-phone&quot; via JsSIP.{' '}
					<br />- Frontend project team: 2 developers.
					<br />- Technologies: JsSIP, React, Next.js, TypeScript,
					GraphQL, Apollo Client, React Final Form, MUI
				</p>
				<p>
					<b>
						Real Estate,
						<ExternalLink href="https://riel.ua/">
							riel.ua
						</ExternalLink>
					</b>
					<br />
					- Development of architecture for a corporation public
					website, templated resident-complexes websites and CMS for
					rule them all.
					<br />- Providing Design and Code review. <br />- Frontend
					project team: 3 developers. <br />- Technologies: CKEditor,
					CKFinder, React, Next.js, TypeScript, GraphQL, Apollo
					Client, React Final Form, MUI
				</p>
			</Details>
			<hr />
			<Details
				title="Frontend Developer at Wezom"
				aside={
					<>
						February 2017 - March 2020,
						<br />2 years 8 months
					</>
				}
			>
				<p>
					I am gained experience working in team and knowledge in the
					different technologies such as{' '}
					<i>
						EJS, Sass (SCSS), Webpack, Blade (Laravel), jQuery and
						later React
					</i>
					.
				</p>
				<p>
					I learned how write tests and documentation, how setup the
					CI/CD pipelines for frontend needs and how to manage the
					technical processes. It helped me to grow up my skills in
					the development of the complex systems.
				</p>
			</Details>
			<hr />
			<Details
				title="HTML Coder at Wezom"
				aside={
					<>
						March 2014 - August 2017,
						<br />3 years 6 months
					</>
				}
			>
				<p>
					I have been switched from Motion Design to IT as HTML Coder.{' '}
					<br />
					At this position I was participated in more than 20
					projects.
				</p>
				<p>
					I learned fundamentals of the web development and gained
					experience in the development of the websites from the
					scratch using such technologies as HTML & CSS, jQuery, Sass
					(SCSS), Jade (Pug), Gulp, Webpack.
				</p>
			</Details>
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
