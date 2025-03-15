import { ReactElement } from 'react';
import './page.css';
import { Education } from './_widgets/Education';
import { Experience } from './_widgets/Experience';
import { Header } from './_widgets/Header';
import { OpenSourceProjects } from './_widgets/OpenSourceProjects';
import { Projects } from './_widgets/Projects';
import { Skills } from './_widgets/Skills';

export default function CVPage(): ReactElement {
	return (
		<>
			<main>
				<Header />
				<Skills />
				<Experience />
				<Education />
				<Projects />
				<OpenSourceProjects />
			</main>
		</>
	);
}
