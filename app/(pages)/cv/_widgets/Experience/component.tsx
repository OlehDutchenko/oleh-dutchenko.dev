import { Details } from '@/(pages)/cv/_components/Details';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function Experience(): ReactElement {
	return (
		<Section title="Main responsibilities and achievements">
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
					<ul className="cv-ul">
						<li>
							Expanding experience in the development of large
							projects
						</li>
						<li>Management of technical processes in the team</li>
						<li>Providing TDD in development processes</li>
						<li>
							Conducting technical interviews and onboarding of
							new specialists
						</li>
						<li>Creation of internal solutions for the company</li>
					</ul>
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
					<ul className="cv-ul">
						<li>Gained experience working in a team</li>
						<li>
							Study of various technologies such as EJS, Sass
							(SCSS), Webpack, Blade (Laravel), jQuery, and later
							React
						</li>
						<li>
							I learned how write tests and technical
							documentation
						</li>
						<li>
							I learned how to set up CI/CD pipelines for frontend
							needs, and how to manage technical processes
						</li>
					</ul>
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
						Learned fundamentals of a web development and gained
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
