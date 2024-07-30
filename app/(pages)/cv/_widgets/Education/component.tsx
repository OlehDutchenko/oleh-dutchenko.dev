import { Details } from '@/(pages)/cv/_components/Details';
import { ExternalLink } from '@/(pages)/cv/_components/ExternalLink';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function Education(): ReactElement {
	return (
		<>
			<div className="cv-columns">
				<div>
					<Section title="Education and Languages">
						<Details title="Kherson National Technical University, 2005 - 2010">
							Graphic and Motion Designer, <br /> Specialist
							degree
						</Details>
					</Section>
				</div>
				<div>
					<Section title="Languages">
						<Details>
							Ukrainian, <br />
							English (Upper-Intermediate)
						</Details>
					</Section>
				</div>
			</div>
			<br />
			<div className="cv-columns">
				<div>
					<Section title="Courses">
						<Details>
							<p>Apollo Odyssey - Lift-off complete course</p>
							<p>Apollo Odyssey - Voyage complete course</p>
						</Details>
					</Section>
				</div>
				<div>
					<Section title="Certificates">
						<Details>
							<p>
								<ExternalLink href="https://app.smalltalk2.me/cert/0fd7bf8c">
									English Speaking Level B2
								</ExternalLink>{' '}
								Apr, 2024
							</p>
							<p>
								<ExternalLink href="https://www.apollographql.com/tutorials/certifications/8ead70f5-3778-4a6c-b223-687fa4ffe239">
									Graph Developer - Professional
								</ExternalLink>{' '}
								Feb, 2024
							</p>
							<p>
								<ExternalLink href="https://www.apollographql.com/tutorials/certifications/dcdccb67-8e36-48ed-8940-f93c991f04c1">
									Graph Developer - Associate
								</ExternalLink>{' '}
								Feb, 2024
							</p>
						</Details>
					</Section>
				</div>
				<div>
					<Section title="Conferences">
						<Details>
							<p>
								<ExternalLink href="https://fwdays.com/event/javascript-fwdays-2024/review/pitfalls-of-typescript-generated-code-from-a-graphql-schema">
									Talk on the Conference JavaScript fwdays’24
								</ExternalLink>{' '}
							</p>
						</Details>
					</Section>
				</div>
			</div>
			<br />
		</>
	);
}
