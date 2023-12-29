import React from 'react';

interface Props {
	title: React.ReactNode;
	caption?: React.ReactNode;
	children?: React.ReactNode;
}

export const Block: React.FC<Props> = ({ title, caption, children }) => {
	return (
		<div className="cv-block">
			<h3>{title}</h3>
			<p className="cv-caption">{caption}</p>
			{children && <div className="cv-block-text">{children}</div>}
		</div>
	);
};
