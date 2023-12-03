import React from 'react';
import styles from './styles.module.css';

export interface ExternalLinkProps {
	children: NonNullable<React.ReactNode>;
	href: string;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
	children,
	href,
}) => {
	const domain = getDomain(href);
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			data-domain={domain}
			className={styles.link}
		>
			{children}
		</a>
	);
};

function getDomain(href: string): string {
	return (
		href
			.replace(/^(https?:)?\/\//, '')
			.replace(/^www\./, '')
			.split('/')[0] || ''
	);
}
