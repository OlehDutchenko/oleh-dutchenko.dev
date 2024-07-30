import { Details } from '@/(pages)/cv/_components/Details';
import { ExternalLink } from '@/(pages)/cv/_components/ExternalLink';
import { ReactElement } from 'react';
import { Section } from '../../_components/Section';

export function Education(): ReactElement {
	return (
		<>
			<div className="cv-columns">
				<div>
					<Section title="Education">
						<Details
							title="Kherson National Technical University"
							aside="2005 - 2010"
						>
							Graphic and Motion Designer, <br/> Specialist
							degree
						</Details>
					</Section>
				</div>
				<div>
					<Section title="Languages">
						<Details>
							Ukrainian, <br/>
							English (B1)
						</Details>
					</Section>
				</div>
			</div>
			<br/>
			<div className="cv-columns">
				<div>
					<Section title="Courses">
						<p>Apollo Odyssey - Lift-off complete course</p>
						<p>Apollo Odyssey - Voyage complete course</p>
						<p>AWS. Developing with Amazon DynamoDB - in progress</p>
					</Section>
				</div>
				<div>
					<Section title="Certificates">
						<p>
							<ExternalLink
								href="https://app.smalltalk2.me/cert/0fd7bf8c">
								SmallTalk. English Speaking Level B2
							</ExternalLink>
							{" "}
							Apr, 2024
						</p>
						<p>
							<ExternalLink
								href="https://www.apollographql.com/tutorials/certifications/8ead70f5-3778-4a6c-b223-687fa4ffe239">
								Graph Developer - Professional
							</ExternalLink>
							{" "}
							Feb, 2024
						</p>
						<p>
							<ExternalLink
								href="https://www.apollographql.com/tutorials/certifications/dcdccb67-8e36-48ed-8940-f93c991f04c1">
								Graph Developer - Associate
							</ExternalLink>
							{" "}
							Feb, 2024
						</p>
					</Section>
				</div>
			</div>

		</>
	);
}
