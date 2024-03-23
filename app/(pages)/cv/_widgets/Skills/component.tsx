import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function Skills(): ReactElement {
	return (
		<Section title="Skills">
			<p className="cv-skill-subtitle">Development methodologies:</p>
			<ul className="cv-ul cv-ul--2">
				<li>Scrum / Waterfall</li>
				<li>Extreme Programming</li>
			</ul>

			<p className="cv-skill-subtitle">Development techniques:</p>
			<ul className="cv-ul cv-ul--2">
				<li>Testing Driven Development</li>
				<li>Design review & Code review</li>
				<li>Monorepo / Polyrepo</li>
				<li>Git Flow / Trunk Based Development</li>
			</ul>

			<p className="cv-skill-subtitle">Technologies:</p>
			<ul className="cv-ul">
				<li>HTML & CSS</li>
				<li>GraphQL</li>
				<li>JavaScript</li>
				<li>React</li>
				<li>TypeScript</li>
				<li>Vitest / Jest</li>
			</ul>
		</Section>
	);
}
