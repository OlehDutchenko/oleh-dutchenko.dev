import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Markdown } from '../view';

describe('Markdown', () => {
	it('should render all HTML heading elements', () => {
		const content = `
			# H1
			## H2
			### H3
			#### H4
			##### H5
			###### H6
		`;

		render(<Markdown content={content} />);

		screen.getByRole('heading', { level: 1 });
		screen.getByRole('heading', { level: 2 });
		screen.getByRole('heading', { level: 3 });
		screen.getByRole('heading', { level: 4 });
		screen.getByRole('heading', { level: 5 });
		screen.getByRole('heading', { level: 6 });
	});

	it('should render explicit HTML elements properly', () => {
		const content = `
			# Hello!<br/> <small className="test">My name is Oleh Dutchenko</small>
		`;

		render(<Markdown content={content} />);

		const h1 = screen.getByRole('heading', { level: 1 });
		expect(h1.querySelector('br')).toBeInTheDocument();
		expect(h1.querySelector('small.test')).toBeInTheDocument();
	});
});
