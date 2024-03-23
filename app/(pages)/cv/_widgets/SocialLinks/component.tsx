import React from 'react';
import { ExternalLink } from '../../_components/ExternalLink';
import { PageFooter } from '../../_components/PageFooter';
import { Section } from '../../_components/Section';

export const SocialLinks: React.FC = () => {
	return (
		<Section title="Social links">
			<ul className="cv-ul">
				<li>
					<ExternalLink href="https://github.com/OlehDutchenko">
						Github
					</ExternalLink>
				</li>
				<li>
					<ExternalLink href="https://www.linkedin.com/in/oleh-dutchenko/">
						LinkedIn
					</ExternalLink>
				</li>
			</ul>
			<PageFooter page={2} height={154} />
		</Section>
	);
};
