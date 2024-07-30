import { ReactElement } from 'react';
import { Details } from '../../_components/Details';
import { Section } from '../../_components/Section';

export function Skills(): ReactElement {
	return (
		<Section title="Skills">
			<div className="cv-columns">
				<div>
					<Details title="Languages:">
						HTML, CSS, JavaScript, TypeScript, GraphQL; <br/>
						<br/>
						<i>Basic understanding:</i> <br/> PHP, Python and Java.
					</Details>
					<Details title="Style techniques and methodologies:">
						Styled Components, CSS Modules, JSS, Sass;
						<br/>
						Responsive Design, Mobile/Desktop First.
					</Details>
					<Details title="CI/CD infrastructure and tools:">
						Monorepo / Polyrepo; <br/>
						Bitbucket Pipelines, GitHub Actions; <br/>
						TurboRepo, Lerna.
					</Details>
				</div>
				<div>
					<Details title="UI Libraries & Frameworks:">
						React.js, Next.js, Storybook, React Hook
						Form; <br/>{' '}
						MUI, Ant Design.
					</Details>
					<Details title="GraphQL libraries:">
						Apollo Client, Apollo Server, Apollo Federation,
						graphql-codegen.
					</Details>
					<Details title="Testing and schema validation libraries:">
						Vitest / Jest, Testing Library; Zod.
					</Details>
					<Details title="WYSIWYG:">
						CKEditor, CKFinder, Editor.js, TinyMCE.
					</Details>
					<Details title="Narrowly profiled libraries:">
						Apache ECharts, JsSIP, GSAP.
					</Details>
				</div>
				<div>
					<Details
						title="Development methodologies, practices and principles:">
						Test-Driven Development, Design review, Code review,
						Pair programming, Refactoring; SOLID, DRY.
					</Details>
					<Details
						title="Project managment methodologies and approaches:">
						Agile / Waterfall, Domain Driven Design.
					</Details>
					<Details title="Project managment tools:">
						Jira, Worksection, Trello.
					</Details>
					<Details title="Version control strategies:">
						Git Flow / Trunk Based Development; <br/> Semantic
						Versioning.
					</Details>
				</div>
			</div>
		</Section>
	);
}
