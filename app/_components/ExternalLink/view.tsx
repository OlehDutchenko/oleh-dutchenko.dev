import React from 'react';
import 'server-only';
import { CSS_VAR_DOMAIN, KNOWN_DOMAINS } from './constants';
import { makeCssVarValue } from './makeCssVarValue';
import styles from './styles.module.css';

export interface ExternalLinkProps {
	children: NonNullable<React.ReactNode>;
	href: string;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
	children,
	href,
}) => {
	const domain = getKnownDomain(href);
	const datasetDomain = getDatasetDomain(domain);
	const style = getStyles(domain);

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			style={style}
			className={styles.link}
			data-domain={datasetDomain}
		>
			{children}
		</a>
	);
};

function getKnownDomain(href: string): string | null {
	const domain =
		href
			.replace(/^(https?:)?\/\//, '')
			.replace(/^www\./, '')
			.split('/')[0];

	return KNOWN_DOMAINS.includes(domain) ? domain : null;
}

function getDatasetDomain(domain: string | null): string | undefined {
	return domain !== null ? '' : undefined;
}

function getStyles(domain: string | null): React.CSSProperties {
	if (!domain) {
		return {};
	}
	return {
		[CSS_VAR_DOMAIN]: makeCssVarValue(domain),
	} as React.CSSProperties;
}
