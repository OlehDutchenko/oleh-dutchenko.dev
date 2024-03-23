import React from 'react';

interface Props {
	title: string;
	children: React.ReactNode;
}

export const Section: React.FC<Props> = ({ title, children }) => {
	return (
		<section className="cv-box">
			<h2 className="cv-section-heading">{title}</h2>
			<div className="cv-section-content">{children}</div>
		</section>
	);
};
