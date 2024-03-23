import clsx from 'clsx';
import { CSSProperties, PropsWithChildren, ReactElement } from 'react';
import { CSS_VAR_DOMAIN, KNOWN_DOMAINS } from './constants';
import styles from './styles.module.css';
import { makeCssVarValue } from './utils/makeCssVarValue';

interface Props extends PropsWithChildren {
	href: string;
	className?: string;
	title?: string;
}

export function External({
	children,
	className: propClassName,
	href,
	title,
}: Props): ReactElement {
	const domain = getKnownDomain(href);
	const style = getStyles(domain);
	const className = clsx(styles.link, propClassName);

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			style={style}
			className={className}
			data-domain={domain}
			title={title}
		>
			{children}
		</a>
	);
}

function getKnownDomain(href: string): string | undefined {
	const domain = href
		.replace(/^(https?:)?\/\//, '')
		.replace(/^www\./, '')
		.split('/')[0];

	return KNOWN_DOMAINS.includes(domain) ? domain : undefined;
}

function getStyles(domain?: string): CSSProperties {
	if (!domain) {
		return {};
	}
	return {
		[CSS_VAR_DOMAIN]: makeCssVarValue(domain),
	} as CSSProperties;
}
