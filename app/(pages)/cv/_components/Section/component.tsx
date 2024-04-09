import { PropsWithChildren, ReactElement } from 'react';

interface Props extends PropsWithChildren {
	title: string;
}

export function Section({ title, children }: Props): ReactElement {
	return (
		<section>
			<h2>{title}</h2>
			<hr />
			<div>{children}</div>
		</section>
	);
}
