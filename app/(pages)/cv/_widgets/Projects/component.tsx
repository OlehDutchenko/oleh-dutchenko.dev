import { ExternalLink } from '@/(pages)/cv/_components/ExternalLink';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function Projects(): ReactElement {
	return (
		<Section title="Key projects in my carier">
			<table cellSpacing={1} style={{ fontSize: 12 }}>
				<tbody>
					<tr>
						<td width={100}>
							<b>Project</b>
						</td>
						<td width={280}>
							<b>Achievements</b>
						</td>
						<td width={200}>
							<b>Responsibility</b>
						</td>
						<td>
							<b>Tech stack</b>
						</td>
					</tr>
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
									Managed technical processes in a team of 11
									developers divided into 4 sub-teams.
								</li>
								<li>
									Managed the technical processes of
									delivering the functionality of the frontend
									part of the project to production.
								</li>
								<li>
									Implemented the TDD as the main development
									methodology
								</li>
								<li>
									Acquired skills to work with monorepository
									and multi-zone architectures based on
									Turborepo and Next.js
								</li>
							</ul>
						</td>
						<td>
							<ul>
								<li>
									Developing of architectural solutions for
									the ERP system: HRM, CRM and Billing.
								</li>
								<li>
									Assessment of tasks and compatible
									distribution (with PM) of tasks among team
									developers
								</li>
								<li>Providing Design and Code review</li>
								<li>Writing a technical documentation</li>
								<li>Validation and review of design layouts</li>
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
									Created the two combined systems: a public
									website and CMS
								</li>
								<li>
									Implemented a complex text editor in the CMS
									and the display template on the public site
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
									Configured the "web soft-phone" component
									for continuous interaction with user in
									combination with Nexts.js routing (Page
									Route)
								</li>
								<li>
									Implemented a system of access to sections
									and features based on the list of user
									permissions
								</li>
								<li>
									Improved the skills of writing unit tests
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
									Providing ability to make VoIP calls in the
									browser
								</li>
								<li>Mentoring a junior developer</li>
								<li>
									Covering bottlenecks in the system with unit
									tests
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
									server-side rendering and queries were first
									tackled
								</li>
								<li>
									Created interactive maps of floor plans
									based on API data structures an SVG shapes
								</li>
								<li>
									Created a sitemap generation system for each
									site
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
									Mastered the skills of working with CKEditor
									and CKFinder
								</li>
							</ul>
						</td>
						<td>
							<ul>
								<li>
									Developing a CMS system for managing
									corporation and resident-complexes websites
									in one place
								</li>
								<li>
									Creating managing tools for the content and
									sections for each site separately
								</li>
								<li>
									Providing text editor and file manager for
									the content
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
		</Section>
	);
}
