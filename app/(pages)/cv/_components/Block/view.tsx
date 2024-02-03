import React from 'react';

interface Props {
	title: React.ReactNode;
	caption?: React.ReactNode;
	children?: React.ReactNode;
}

export const Block: React.FC<Props> = ({ title, caption, children }) => {
	return (
		<div className="cv-block">
			<p>
				<strong>{title}</strong>
				<br />
				<span className="cv-caption">{caption}</span>
			</p>

			{children && <div className="cv-block-text">{children}</div>}
		</div>
	);
};
