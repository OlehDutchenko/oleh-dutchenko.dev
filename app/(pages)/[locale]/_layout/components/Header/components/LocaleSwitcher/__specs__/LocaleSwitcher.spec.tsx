import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LocaleSwitcher, LocaleSwitcherProps } from '../index';

describe('LocaleSwitcher', () => {
	it('should render <select> element with options', () => {
		const options: LocaleSwitcherProps['options'] = [
			{
				label: 'English',
				value: 'en',
			},
			{
				label: 'Українська',
				value: 'uk',
			},
		];

		render(<LocaleSwitcher options={options} />);
		const select = screen.queryByRole('combobox');
		expect(select).toBeInstanceOf(HTMLElement);
		expect(select?.children.length).toBe(2);
	});
});
