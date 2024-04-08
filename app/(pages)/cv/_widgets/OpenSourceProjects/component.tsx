import { ExternalLink } from '@/(pages)/cv/_components/ExternalLink';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function OpenSourceProjects(): ReactElement {
	return (
		<Section title="My open-source projects I am proud of">
			<table className="cv-table cv-table--double">
				<tbody>
					<tr>
						<td>
							<b>sort-css-media-queries</b> <br />
							The custom sort method (mobile-first /
							desktop-first). <br />
							It is a core of postcss-sort-media-queries plugin.
							<br />
							<br />
						</td>
						<td>
							<ExternalLink href="https://github.com/OlehDutchenko/sort-css-media-queries">
								GitHub
							</ExternalLink>
							{' | '}
							<ExternalLink href="https://www.npmjs.com/package/sort-css-media-queries">
								NPM
							</ExternalLink>
						</td>
					</tr>
					<tr>
						<td>
							<b>node-w3c-validator</b> <br />
							Wrapper for the Nu Html Checker (v.Nu). <br />
							You can use it as CLI tool or as Node.js module in
							your CI workflow.
							<br />
							<br />
						</td>
						<td>
							<ExternalLink href="https://github.com/OlehDutchenko/node-w3c-validator">
								GitHub
							</ExternalLink>
							{' | '}
							<ExternalLink href="https://www.npmjs.com/package/node-w3c-validator">
								NPM
							</ExternalLink>
						</td>
					</tr>
					<tr>
						<td>
							<b>gulp-ejs-monster</b> <br />
							Was actively used inside the company for commercial
							projects
							<br />
							<br />
						</td>
						<td>
							<ExternalLink href="https://github.com/OlehDutchenko/gulp-ejs-monster">
								GitHub
							</ExternalLink>
							{' | '}
							<ExternalLink href="https://www.npmjs.com/package/gulp-ejs-monster">
								NPM
							</ExternalLink>
						</td>
					</tr>
					<tr>
						<td>
							<b>Tooling libs, Wezom open-source</b> <br />
							I create many of helper tools as open-source
							libraries for commercial needs <br /> for Wezom
							company.
						</td>
						<td>
							<ExternalLink href="https://github.com/WezomCompany">
								GitHub
							</ExternalLink>
						</td>
					</tr>
				</tbody>
			</table>
		</Section>
	);
}
