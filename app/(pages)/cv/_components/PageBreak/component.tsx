import React from 'react';
import { PageCaption } from '../PageCaption';

export const PageBreak: React.FC = () => (
	<div className="cv-page-break">
		<div className="cv-page-break__gap" />
		<div className="cv-box">
			<PageCaption />
		</div>
	</div>
);
