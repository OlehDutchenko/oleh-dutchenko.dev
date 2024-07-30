import { Details } from '@/(pages)/cv/_components/Details';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function Experience(): ReactElement {
	return (
		<Section title="Experience in various development positions">
			<div className="cv-columns">
				<Details
					title="Senior Frontend Developer at Wezom"
					aside={
						<>
							March 2020 - <br />
							Present,
							<br />
							{currentDuration()}
						</>
					}
				>
					<p>
						Expanding my experience in the
						development of large projects, managing technical
						processes in a team, understanding the feasibility of
						selected technologies and forecasting the consequences
						of their use.
					</p>
					<p>
						Conducted technical interviews for junior and middle
						level specialists. After hiring, conducted onboarding
						for the project.
					</p>
					<p>
						Participated in the creation of internal solutions for
						the company: open source libraries and boilerplate
						templates for typical projects.
					</p>
				</Details>
				<Details
					title="Middle Frontend Developer at Wezom"
					aside={
						<>
							February 2017 - <br />
							March 2020,
							<br />2 years 8 months
						</>
					}
				>
					<p>
						I gained experience working in a team and knowledge in
						different technologies such as{' '}
						<i>
							EJS, Sass (SCSS), Webpack, Blade (Laravel), jQuery,
							and later React
						</i>
						.
					</p>
					<p>
						I learned how write tests and documentation, how to set up
						CI/CD pipelines for frontend needs, and how to manage
						technical processes. It helped me to grow up my
						skills in the development of the complex systems.
					</p>
				</Details>
				<Details
					title="HTML Coder at Wezom"
					aside={
						<>
							March 2014 - <br />
							August 2017,
							<br />3 years 6 months
						</>
					}
				>
					<p>
						I have been switched from Motion Design to IT as HTML
						Coder. <br />
						At this position I was participated in more than 20
						projects.
					</p>
					<p>
						I learned fundamentals of the web development and gained
						experience in the development of the websites from the
						scratch using such technologies as HTML & CSS, jQuery,
						Sass (SCSS), Jade (Pug), Gulp, Webpack.
					</p>
				</Details>
			</div>
			<br />
		</Section>
	);
}

function currentDuration(): string {
	const now = new Date();
	const start = new Date(2020, 2, 1);
	let years = now.getFullYear() - start.getFullYear();
	let months = now.getMonth() - start.getMonth();
	if (months < 0) {
		years--;
		months += 12;
	}
	const monthLabel = months === 1 ? ' month' : ' months';
	const monthValue = months === 0 ? '' : ` ${months} ${monthLabel}`;
	return `${years} years ${monthValue}`;
}
