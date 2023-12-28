import React from 'react';
import { Section } from '../../_components/Section';

export const Employment: React.FC = () => {
	return (
		<Section title="Employment history">
			<div className="cv-block">
				<h3>
					Frontend Tech Lead at <Wezom />
				</h3>
				<p className="cv-caption">March 2020 - Present</p>
			</div>
			<div className="cv-block">
				<h3>
					Frontend Developer at <Wezom />
				</h3>
				<p className="cv-caption">February 2017 - March 2020</p>
			</div>
			<div className="cv-block">
				<h3>
					HTML Coder at <Wezom />
				</h3>
				<p className="cv-caption">March 2014 - February 2017</p>
			</div>
		</Section>
	);
};

function Wezom(): React.ReactElement {
	return (
		<a href="https://wezom.com/" target="_blank" rel="noopener noreferrer">
			Wezom
		</a>
	);
}
