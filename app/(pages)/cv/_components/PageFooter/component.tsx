import { ReactElement } from 'react';

interface Props {
	height: number;
}

export function PageFooter({ height }: Props): ReactElement {
	const style = { height };
	return <div className="cv-page-footer" style={style} />;
}
