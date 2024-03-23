import { ReactElement } from 'react';
import { PageCaption } from '../PageCaption';

export function PageBreak(): ReactElement {
	return (
		<div className="cv-page-break">
			<div className="cv-page-break__gap" />
			<div className="cv-box">
				<PageCaption />
			</div>
		</div>
	);
}
