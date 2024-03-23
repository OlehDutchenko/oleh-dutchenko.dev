import { PropsWithChildren, ReactElement, ReactNode } from 'react';

interface Props extends PropsWithChildren {
	title: ReactNode;
	caption?: ReactNode;
}

export function Block({ title, caption, children }: Props): ReactElement {
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
}
