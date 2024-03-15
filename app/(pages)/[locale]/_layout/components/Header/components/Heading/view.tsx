'use client';

import { PageProps } from '@/_types/page-props';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React, { PropsWithChildren, ReactElement } from 'react';
import styles from './styles.module.css';

export interface HeadingProps {
	label: string;
	iconAlt: string;
}

export const Heading: React.FC<HeadingProps> = ({ label, iconAlt }) => {
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
};

function LogoLink({ children }: PropsWithChildren): ReactElement {
	const { locale } = useParams<PageProps['params']>();
	const href = `/${locale}`;
	const pathname = usePathname();

	if (href === pathname) {
		return <>{children}</>;
	} else {
		return <Link href={href}>{children}</Link>;
	}
}
