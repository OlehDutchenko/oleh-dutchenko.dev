import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
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
});
