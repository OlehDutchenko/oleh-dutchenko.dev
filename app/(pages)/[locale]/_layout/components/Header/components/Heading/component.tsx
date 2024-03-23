'use client';

import { PageProps } from '@/_types/page-props';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { PropsWithChildren, ReactElement } from 'react';
import styles from './styles.module.css';

export interface Props {
	label: string;
	iconAlt: string;
}

export function Heading({ label, iconAlt }: Props): ReactElement {
	return (
		<h1 className={styles.heading} aria-label={label}>
			<LogoLink>
				<Image
					width="72"
					height="69"
					src="/static/icon.svg"
					alt={iconAlt}
					className={styles.img}
					draggable="false"
					aria-hidden="true"
				/>
			</LogoLink>
		</h1>
	);
}

function LogoLink({ children }: PropsWithChildren): ReactElement {
	const { locale } = useParams<PageProps['params']>();
	const href = `/${locale}`;
	const pathname = usePathname();

	if (href === pathname) {
		return <span className={styles.logo}>{children}</span>;
	} else {
		const className = clsx(styles.logo, styles.logoLink);
		return (
			<Link className={className} href={href}>
				{children}
			</Link>
		);
	}
}
