import { ReactElement } from 'react';

interface Props {
	page: number;
	height: number;
}

const PAGES = 2;

export function PageFooter({ height, page }: Props): ReactElement {
	const style = { height };
	const pages = `${page} / ${PAGES}`;
	return (
		<div className="cv-page-footer" style={style}>
			<div className="cv-pagination">{pages}</div>
		</div>
	);
}
