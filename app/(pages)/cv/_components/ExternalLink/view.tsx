import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
	href: string;
}

export function ExternalLink({ href, children }: Props) {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	);
}
