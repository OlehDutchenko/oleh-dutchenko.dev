import { AccentElement } from '@/_components/AccentElement';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactElement } from 'react';
import styles from './styles.module.css';

export interface Props {
	href: string;
	label: string;
}

export function Item({ label, href }: Props): ReactElement {
	const active = useActive(href);
	return (
		<AccentElement>
			<Link href={href} data-active={active} className={styles.item}>
				{label}
			</Link>
		</AccentElement>
	);
}

function useActive(href: string): string | undefined {
	const pathname = usePathname();
	return pathname.startsWith(href) ? '' : undefined;
}
