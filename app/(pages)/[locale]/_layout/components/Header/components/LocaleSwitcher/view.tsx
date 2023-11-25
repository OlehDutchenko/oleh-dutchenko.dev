'use client';

import 'client-only';
import { Control } from '@/_components/Control';
import React from 'react';

export interface LocaleSwitcherProps {
	options: Option[];
}

interface Option {
	label: string;
	value: string;
	selected: boolean;
}

export const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ options }) => {
	const selectValue = options.find((option) => option.selected)?.value;
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
