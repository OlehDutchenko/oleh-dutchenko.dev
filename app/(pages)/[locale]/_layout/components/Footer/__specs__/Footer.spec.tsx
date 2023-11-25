import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Footer } from '../view';

describe('Footer', () => {
	it.todo('should render <footer> element', () => {
		render(<Footer />);
		const header = screen.queryByRole('contentinfo');
		expect(header).toBeInstanceOf(HTMLElement);
	});
});
