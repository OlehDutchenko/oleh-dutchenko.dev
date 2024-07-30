import { Details } from '@/(pages)/cv/_components/Details';
import { ExternalLink } from '@/(pages)/cv/_components/ExternalLink';
import { PageBreak } from '@/(pages)/cv/_components/PageBreak';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function CommercialProjects(): ReactElement {
	return (
		<>
			<Section title="Projects experience">
				<Details
					title="Senior Frontend Developer at Wezom"
					aside={
						<>
							March 2020 - Present,
							<br />
							{currentDuration()}
						</>
					}
				>
					<p>
						In this position I am expanding my experience in the
						development of large projects, <br /> managing technical
						processes in a team, understanding the feasibility <br />
						of selected technologies and forecasting the consequences of
						their use. Conducted technical interviews for junior and
						middle level specialists. After hiring, conducted onboarding
						for the project. Also participated in the creation of internal solutions for
						the company: open source libraries and boilerplate templates
						for typical projects.
					</p>
					<p style={{ paddingTop: 6, marginBottom: '1em' }}>
						<strong>Key projects in this position:</strong>
					</p>
					<table cellSpacing={1} style={{ fontSize: 11 }}>
						<thead>
						<tr>
							<th width={100}>Project</th>
							<th width={280}>Achievements</th>
							<th width={200}>Responsibility</th>
							<th>Tech stack</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td>
								<span>
									Energy carriers, NDA, <br /> 2+ years
								</span>
							</td>
							<td>
								<ul>
									<li>
										Performed the role of Tech Lead. <br />
									</li>
									<li>
										Managed technical processes in a team of
										11 developers divided into 4 sub-teams.
									</li>
									<li>
										Managed the technical processes of
										delivering the functionality of the
										frontend part of the project to
										production.
									</li>
									<li>
										Implemented the TDD as the main
										development methodology
									</li>
									<li>
										Acquired skills to work with
										monorepository and multi-zone
										architectures based on Turborepo and
										Next.js
									</li>
								</ul>
							</td>
							<td>
								<ul>
									<li>
										Developing of architectural solutions
										for the ERP system: HRM, CRM and
										Billing.
									</li>
									<li>
										Assessment of tasks and compatible
										distribution (with PM) of tasks among
										team developers
									</li>
									<li>Providing Design and Code review</li>
									<li>Writing a technical documentation</li>
									<li>
										Validation and review of design layouts
									</li>
								</ul>
							</td>
							<td>
								TypeScript, React, <br />
								GraphQL, Apollo Client, <br />
								Next.js, React Hook Form, <br />
								Ant Design, Vitest, <br />
								Storybook, Turborepo,
							</td>
						</tr>
						<tr>
							<td>
								<span>
									News platform, NDA, <br /> 6 months
								</span>
							</td>
							<td>
								<ul>
									<li>
										Created the two combined systems: a
										public website and CMS
									</li>
									<li>
										Implemented a complex text editor in the
										CMS and the display template on the
										public site
									</li>
								</ul>
							</td>
							<td>
								<ul>
									<li>
										Creating a CMS to manage publications,
										rubrics and authors
									</li>
									<li>Mentoring a middle developer</li>
								</ul>
							</td>
							<td>
								React, TypeScript, <br />
								GraphQL, Apollo Client, <br />
								Next.js, React Hook Form, MUI <br />
								CKEditor, CKFinder, Jest,
							</td>
						</tr>
						<tr>
							<td>
								<span>
									VoIP telephony, NDA, <br /> 6 months
								</span>
							</td>
							<td>
								<ul>
									<li>
										Developed a "web soft-phone" with a user
										interface for interaction with JsSIP
									</li>
									<li>
										Configured the "web soft-phone"
										component for continuous interaction
										with user in combination with Nexts.js
										routing (Page Route)
									</li>
									<li>
										Implemented a system of access to
										sections and features based on the list
										of user permissions
									</li>
									<li>
										Improved the skills of writing unit
										tests
									</li>
								</ul>
							</td>
							<td>
								<ul>
									<li>
										Creating a CRM system for managing VoIP:
										services, records, accounts and tariff
									</li>
									<li>
										Providing ability to make VoIP calls in
										the browser
									</li>
									<li>Mentoring a junior developer</li>
									<li>
										Covering bottlenecks in the system with
										unit tests
									</li>
								</ul>
							</td>
							<td>
								JsSIP, React, TypeScript, <br />
								GraphQL, Apollo Client, <br />
								Next.js, React Hook Form, MUI
							</td>
						</tr>
						<tr>
							<td>
								<span>
									Real Estate, <br />
									<ExternalLink href="https://riel.ua/">
										riel.ua
									</ExternalLink>
									<br />
									CMS and over 20 resident-complexes templated
									websites,
									<br /> 1+ year
								</span>
							</td>
							<td>
								<ul>
									<li>
										With the capabilities of Next.js,
										server-side rendering and queries were
										first tackled
									</li>
									<li>
										Created interactive maps of floor plans
										based on API data structures an SVG
										shapes
									</li>
									<li>
										Created a sitemap generation system for
										each site
									</li>
									<li>
										Developed a loan calculator for buying a
										home on credit
									</li>
									<li>
										Learned to work with GraphQL and Apollo
										Client
									</li>
									<li>
										Mastered the skills of working with
										CKEditor and CKFinder
									</li>
								</ul>
							</td>
							<td>
								<ul>
									<li>
										Developing a CMS system for managing
										corporation and resident-complexes
										websites in one place
									</li>
									<li>
										Creating managing tools for the content
										and sections for each site separately
									</li>
									<li>
										Providing text editor and file manager
										for the content
									</li>
								</ul>
							</td>
							<td>
								React, TypeScript, <br />
								GraphQL, Apollo Client, <br />
								Next.js, React Final Form, MUI <br />
								CKEditor, CKFinder, Jest,
							</td>
						</tr>
						</tbody>
					</table>
				</Details>
			</Section>
			<PageBreak />
			<Section title="Experience of previous positions">
				<div className="cv-columns">
					<Details
						title="Middle Frontend Developer at Wezom"
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
							I learned how write tests and documentation, how set up the
							CI/CD pipelines for frontend needs and how to manage the
							technical processes. It helped me to grow up my skills in
							the development of the complex systems.
						</p>
					</Details>
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
				</div>
				<br/>
			</Section>
		</>
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
