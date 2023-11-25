'use client';

import { Control } from '@/_components/Control';
import { Locale } from '@/_locales/constants';
import 'client-only';
import React from 'react';

export interface LocaleSwitcherProps {
	options: {
		label: string;
		value: Locale;
	}[];
}

export const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ options }) => {
	const selectValue = options[0]?.value;
	return (
		<Control>
			<select defaultValue={selectValue}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</Control>
	);
};
