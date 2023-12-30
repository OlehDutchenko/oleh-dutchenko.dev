import { ExternalLink } from '@/(pages)/cv/_components/ExternalLink';
import { PageBreak } from '@/(pages)/cv/_components/PageBreak';
import { PageFooter } from '@/(pages)/cv/_components/PageFooter';
import React from 'react';
import { Block } from '../../_components/Block';
import { Section } from '../../_components/Section';

export const OpenSourceProjects: React.FC = () => {
	return (
		<>
			<Section title="My open-source projects I am proud of">
				<Block
					title="sort-css-media-queries"
					caption={
						<>
							<ExternalLink href="https://github.com/OlehDutchenko/sort-css-media-queries">
								GitHub
							</ExternalLink>{' '}
							<ExternalLink href="https://www.npmjs.com/package/sort-css-media-queries">
								NPM
							</ExternalLink>
						</>
					}
				>
					<p>
						The custom sort method (mobile-first / desktop-first).{' '}
						<br /> It is a core of postcss-sort-media-queries
						plugin.
					</p>
				</Block>
				<Block
					title="node-w3c-validator"
					caption={
						<>
							<ExternalLink href="https://github.com/OlehDutchenko/node-w3c-validator">
								GitHub
							</ExternalLink>{' '}
							<ExternalLink href="https://www.npmjs.com/package/node-w3c-validator">
								NPM
							</ExternalLink>
						</>
					}
				>
					<p>
						Wrapper for the Nu Html Checker (v.Nu). <br />
						You can use it as CLI tool or as Node.js module in your
						CI workflow.
					</p>
				</Block>

				<PageFooter height={35} page={2} />
			</Section>
			<PageBreak />
			<Section title="My open-source projects I am proud of">
				<Block
					title="gulp-ejs-monster"
					caption={
						<>
							<ExternalLink href="https://github.com/OlehDutchenko/gulp-ejs-monster">
								GitHub
							</ExternalLink>{' '}
							<ExternalLink href="https://www.npmjs.com/package/gulp-ejs-monster">
								NPM
							</ExternalLink>
						</>
					}
				>
					<p>
						&quot;Gulp plugin for EJS with steroids&quot;. <br />
						<em>
							Was actively used inside the company for commercial
							projects
						</em>
					</p>
				</Block>
				<Block title="Tooling libs, Wezom open-source">
					<p>
						I create many of helper tools as open-source libraries
						for commercial needs for Wezom company. See all
						repositories:{' '}
						<ExternalLink href="https://github.com/WezomCompany">
							https://github.com/WezomCompany
						</ExternalLink>
					</p>
				</Block>
			</Section>
		</>
	);
};
