import { Root } from '@/_components/Root';
import React from 'react';
import './page.css';
import { PageBreak } from './_components/PageBreak';
import { CommercialProjects } from './_widgets/CommercialProjects';
import { Employment } from './_widgets/Employment';
import { Header } from './_widgets/Header';
import { Profile } from './_widgets/Profile';
import { OpenSourceProjects } from './_widgets/OpenSourceProjects';
import { Education } from './_widgets/Education';
import { Languages } from './_widgets/Languages';
import { SocialLinks } from './_widgets/SocialLinks';

export default function CVPage(): React.ReactElement {
	return (
		<Root locale="en">
			<main>
				<Header />
				<Profile />
				<Employment />
				<PageBreak />
				<CommercialProjects />
				<OpenSourceProjects />
				<Education />
				<Languages />
				<SocialLinks />
			</main>
		</Root>
	);
}
