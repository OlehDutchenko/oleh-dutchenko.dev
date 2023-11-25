import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Control } from '../index';

describe('Control', () => {
	it('should render control wrapper with inner div for decorative styles', () => {
		const { container } = render(
			<Control>
				<input />
			</Control>
		);

		const div = container.firstElementChild;
		expect(div).toBeInstanceOf(HTMLElement);

		const innerDiv = div?.firstElementChild;
		expect(innerDiv).toBeInstanceOf(HTMLElement);

		const input = screen.queryByRole('textbox');
		expect(input).toBeInstanceOf(HTMLInputElement);
	});
});
