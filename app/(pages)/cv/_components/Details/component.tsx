import { PropsWithChildren, ReactElement, ReactNode } from 'react';

interface Props extends PropsWithChildren {
	title?: ReactNode;
	aside?: ReactNode;
}

export function Details({ title, aside, children }: Props): ReactElement {
	return (
		<div className="cv-block">
			{aside && <aside className="cv-block__aside">{aside}</aside>}
			<article>
				{title && <h3>{title}</h3>}
				{children}
			</article>
		</div>
	);
}
