import { ReactElement } from 'react';
import { Details } from '../../_components/Details';
import { Section } from '../../_components/Section';

export function Skills(): ReactElement {
	return (
		<Section title="Skills">
			<div className="cv-columns">
				<div>
					<Details title="Languages:">
						HTML, CSS, JavaScript, TypeScript, GraphQL; <br />
						<i>Basic understanding:</i> PHP, Python and Java.
					</Details>
					<Details title="Techniques and methodologies:">
						TDD, BEM, Responsive Design, Mobile/Desktop First,
						Cross-browser compatibility;
						<br />
						Styled Components, CSS Modules, JSS, Sass.
					</Details>
					<Details title="Development practices and principles:">
						Design review, Code review, Pair programming,
						Refactoring; SOLID, DRY.
					</Details>
					<Details title="Project managment:">
						Scrum / Waterfall, Domain Driven Design.
					</Details>
					<Details title="CI/CD infrastructure and tools:">
						Monorepo / Polyrepo; <br />
						Bitbucket Pipelines, GitHub Actions; <br />
						TurboRepo, Lerna.
					</Details>
				</div>
				<div>
					<Details title="Version control strategies:">
						Git Flow / Trunk Based Development; <br /> Semantic
						Versioning.
					</Details>
					<Details title="UI Libraries & Frameworks:">
						React.js, Next.js, Storybook, React Hook Form; <br />{' '}
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
			</div>
		</Section>
	);
}
