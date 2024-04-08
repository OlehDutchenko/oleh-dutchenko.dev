import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function Skills(): ReactElement {
	return (
		<Section title="Skills">
			<p className="cv-skill-subtitle">
				<span className="cv-block-subtitle">
					Languages and technologies
				</span>
				HTML, SVG, CSS, JSS, Sass, JavaScript, TypeScript, GraphQL
			</p>
			<p className="cv-skill-subtitle">
				<span className="cv-block-subtitle">
					UI Libraries & Frameworks:
				</span>
				React.js, Next.js, React Hook Form, MUI, Ant Design, eCharts,
				bpmn-js
			</p>
			<p className="cv-skill-subtitle">
				<span className="cv-block-subtitle">GraphQL libraries:</span>
				Apollo Client, Apollo Server, Apollo Federation, graphql-codegen
			</p>
			<p className="cv-skill-subtitle">
				<span className="cv-block-subtitle">Testing libraries:</span>
				Vitest / Jest, React Testing Library
			</p>
			<p className="cv-skill-subtitle">
				<span className="cv-block-subtitle">
					Development techniques:
				</span>
				Testing Driven Development, Design review, Code review, Monorepo
				/ Polyrepo, <br />
				Git Flow / Trunk Based Development,
			</p>
		</Section>
	);
}
