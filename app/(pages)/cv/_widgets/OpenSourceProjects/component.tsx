import { Details } from '@/(pages)/cv/_components/Details';
import { ExternalLink } from '@/(pages)/cv/_components/ExternalLink';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function OpenSourceProjects(): ReactElement {
	return (
		<Section title="My open-source projects I am proud of">
			<div className="cv-columns">
				<div>
					<Details
						title={
							<>
								sort-css-media-queries:{' '}
								<ExternalLink href="https://github.com/OlehDutchenko/sort-css-media-queries">
									GitHub
								</ExternalLink>
								{' | '}
								<ExternalLink href="https://www.npmjs.com/package/sort-css-media-queries">
									NPM
								</ExternalLink>
							</>
						}
					>
						The custom sort method (mobile-first / desktop-first).{' '}
						<br />
						It is a core of postcss-sort-media-queries plugin.
					</Details>
					<Details
						title={
							<>
								Tooling libs, Wezom open-source:{' '}
								<ExternalLink href="https://github.com/WezomCompany">
									GitHub
								</ExternalLink>
							</>
						}
					>
						I create many of helper tools as open-source libraries
						for commercial needs for Wezom company.
					</Details>
				</div>
				<div>
					<Details
						title={
							<>
								node-w3c-validator:{' '}
								<ExternalLink href="https://github.com/OlehDutchenko/node-w3c-validator">
									GitHub
								</ExternalLink>
								{' | '}
								<ExternalLink href="https://www.npmjs.com/package/node-w3c-validator">
									NPM
								</ExternalLink>
							</>
						}
					>
						Wrapper for the Nu Html Checker (v.Nu). You can use it
						as CLI tool or as Node.js module in your CI workflow.
					</Details>

					<Details
						title={
							<>
								gulp-ejs-monster:{' '}
								<ExternalLink href="https://github.com/OlehDutchenko/gulp-ejs-monster">
									GitHub
								</ExternalLink>
								{' | '}
								<ExternalLink href="https://www.npmjs.com/package/gulp-ejs-monster">
									NPM
								</ExternalLink>
							</>
						}
					>
						Was actively used inside the company for commercial
						projects
					</Details>
				</div>
			</div>
		</Section>
	);
}
