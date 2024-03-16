'use client';

import { AccentElement } from '@/_components/AccentElement';
import { Locale } from '@/_locales';
import { PageProps } from '@/_types/page-props';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React, { ReactElement } from 'react';
import styles from './styles.module.css';

export interface Props {
	description: string;
	options: {
		label: string;
		value: Locale;
	}[];
}

export function LocaleSwitcher({ description, options }: Props): ReactElement {
	const { locale } = useParams<PageProps['params']>();
	const router = useRouter();
	const pathname = usePathname();
	const handeChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
		const value = event.target.value;
		const redirectPath = pathname.replace(`/${locale}`, `/${value}`);
		router.push(redirectPath);
	};

	return (
		<AccentElement>
			<select
				className={styles.select}
				title={description}
				value={locale}
				onChange={handeChange}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</AccentElement>
	);
}
