import React from 'react';

interface Props {
	page: number;
	height: number;
}

const PAGES = 3;

export const PageFooter: React.FC<Props> = ({ height, page }) => (
	<div className="cv-page-footer" style={{ height }}>
		<div className="cv-pagination">{`${page} / ${PAGES}`}</div>
	</div>
);
