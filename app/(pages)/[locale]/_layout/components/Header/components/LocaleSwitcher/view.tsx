'use client';

import { Control } from '@/_components/Control';
import { Locale } from '@/_locales/constants';
import { PageProps } from '@/_types/page-props';
import 'client-only';
import { useRouter, useParams, usePathname } from 'next/navigation';
import React from 'react';

export interface LocaleSwitcherProps {
	options: {
		label: string;
		value: Locale;
	}[];
}

export const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ options }) => {
	const { locale: initialValue } = useParams<PageProps['params']>();
	const router = useRouter();
	const pathname = usePathname();
	const handeChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
		const value = event.target.value;
		const redirectPath = pathname.replace(`/${initialValue}`, `/${value}`);
		router.push(redirectPath);
	};
	return (
		<Control>
			<select value={initialValue} onChange={handeChange}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</Control>
	);
};
