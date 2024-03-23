import { PropsWithChildren, ReactElement } from 'react';

interface Props extends PropsWithChildren {
	title: string;
}

export function Section({ title, children }: Props): ReactElement {
	return (
		<section className="cv-box">
			<h2 className="cv-section-heading">{title}</h2>
			<div className="cv-section-content">{children}</div>
		</section>
	);
}
