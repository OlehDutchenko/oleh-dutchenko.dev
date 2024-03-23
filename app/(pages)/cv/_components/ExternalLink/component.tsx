import { PropsWithChildren, ReactElement } from 'react';

interface Props extends PropsWithChildren {
	href: string;
}

export function ExternalLink({ href, children }: Props): ReactElement {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	);
}
