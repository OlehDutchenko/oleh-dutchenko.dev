import { Root } from '@/_components/Root';
import { ReactElement } from 'react';
import './page.css';
import { PageBreak } from './_components/PageBreak';
import { Projects } from './_widgets/Projects';
import { Education } from './_widgets/Education';
import { Header } from './_widgets/Header';
import { Experience } from './_widgets/Experience';
import { OpenSourceProjects } from './_widgets/OpenSourceProjects';
import { Skills } from './_widgets/Skills';

export default function CVPage(): ReactElement {
	return (
		<Root>
			<main>
				<Header />
				<Skills />
				<Experience />
				<Education />
				<OpenSourceProjects />
				<PageBreak />
				<Projects />
			</main>
		</Root>
	);
}
