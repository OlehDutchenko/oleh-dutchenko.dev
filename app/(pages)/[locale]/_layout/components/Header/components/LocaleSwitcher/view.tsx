'use client';

import { Control } from '@/_components/Control';
import { Locale } from '@/_locales/constants';
import { PageProps } from '@/_types/page-props';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React from 'react';

export interface LocaleSwitcherProps {
	description: string;
	options: {
		label: string;
		value: Locale;
	}[];
}

export const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({
	description,
	options,
}) => {
	const { locale } = useParams<PageProps['params']>();
	const router = useRouter();
	const pathname = usePathname();
	const handeChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
		const value = event.target.value;
		const redirectPath = pathname.replace(`/${locale}`, `/${value}`);
		router.push(redirectPath);
	};

	return (
		<Control>
			<select title={description} value={locale} onChange={handeChange}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</Control>
	);
};
