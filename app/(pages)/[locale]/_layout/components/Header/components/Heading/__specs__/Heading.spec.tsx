import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Heading } from '../view';

describe('Heading', () => {
	it('should render <h1> element', () => {
		render(<Heading label="Label" iconAlt="Alt" />);
		const header = screen.queryByRole('heading', {
			name: 'Label',
			level: 1,
		});
		expect(header).toBeInstanceOf(HTMLHeadingElement);
	});

	it('should render image with correct attributes as heading child element', () => {
		const { container } = render(<Heading label="Label" iconAlt="Alt" />);
		const img = container.querySelector('img');
		expect(img).toBeInstanceOf(HTMLImageElement);
		expect(img?.alt).toBe('Alt');
		expect(img?.src.endsWith('/static/icon.svg')).toBe(true);
		expect(img?.draggable).toBe(false);
		expect(img?.getAttribute('loading')).toBe('lazy');
		expect(img?.getAttribute('aria-hidden')).toBe('true');
	});
});
