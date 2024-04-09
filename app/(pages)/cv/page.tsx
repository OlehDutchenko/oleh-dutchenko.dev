import { Root } from '@/_components/Root';
import { ReactElement } from 'react';
import './page.css';
import { PageBreak } from './_components/PageBreak';
import { CommercialProjects } from './_widgets/CommercialProjects';
import { Education } from './_widgets/Education';
import { Header } from './_widgets/Header';
import { Languages } from './_widgets/Languages';
import { OpenSourceProjects } from './_widgets/OpenSourceProjects';
import { Skills } from './_widgets/Skills';

export default function CVPage(): ReactElement {
	return (
		<Root>
			<main>
				<Header />
				<Skills />
				<Languages />
				<Education />
				<PageBreak />
				<CommercialProjects />
				<OpenSourceProjects />
			</main>
		</Root>
	);
}
