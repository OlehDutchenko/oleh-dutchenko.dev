import { Details } from '@/(pages)/cv/_components/Details';
import { ExternalLink } from '@/(pages)/cv/_components/ExternalLink';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function Education(): ReactElement {
	return (
		<>
			<Section title="Education and Languages">
				<div className="cv-columns">
					<Details
						title="Kherson National Technical University, 2005 - 2010"
					>
						Graphic and Motion Designer, <br /> Specialist degree
					</Details>
					<Details
						title="Languages"
					>
						Ukrainian, <br />
						English (Upper-Intermediate)
					</Details>
				</div>
			</Section>
			<br />

			<Section title="Courses, Certificates and Conferences">
				<div className="cv-columns">
					<Details>
						<p>Apollo Odyssey - Lift-off complete course</p>
						<p>Apollo Odyssey - Voyage complete course</p>
					</Details>
					<Details>
						<p>
							<ExternalLink
								href="https://app.smalltalk2.me/cert/0fd7bf8c">
								English Speaking Level B2
							</ExternalLink>{' '}
							Apr, 2024
						</p>
						<p>
							<ExternalLink
								href="https://www.apollographql.com/tutorials/certifications/8ead70f5-3778-4a6c-b223-687fa4ffe239">
								Graph Developer - Professional
							</ExternalLink>{' '}
							Feb, 2024
						</p>
						<p>
							<ExternalLink
								href="https://www.apollographql.com/tutorials/certifications/dcdccb67-8e36-48ed-8940-f93c991f04c1">
								Graph Developer - Associate
							</ExternalLink>{' '}
							Feb, 2024
						</p>
					</Details>
					<Details>
						<p>
							<ExternalLink
								href="https://fwdays.com/event/javascript-fwdays-2024/review/pitfalls-of-typescript-generated-code-from-a-graphql-schema">
								Talk on the Conference JavaScript fwdays’24
							</ExternalLink>{' '}
						</p>
					</Details>
				</div>
			</Section>
			<br/>
		</>
	);
}
