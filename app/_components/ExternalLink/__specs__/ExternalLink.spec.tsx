import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ExternalLink } from '../index';

describe('ExternalLink', () => {
	it('should render <a> element with `target="_blank"` and `rel="noopener noreferrer"` attrs', () => {
		render(<ExternalLink href="https://example.com">link</ExternalLink>);
		const anchor = getLink();
		expect(anchor).toBeInstanceOf(HTMLElement);
		expect(anchor.target).toBe('_blank');
		expect(anchor.rel).toBe('noopener noreferrer');
	});

	describe('should recognize resource domain: GitHub', () => {
		test('https://github.com/OlehDutchenko');
		test('http://github.com/OlehDutchenko');
		test('https://www.github.com/OlehDutchenko');
		test('//www.github.com/OlehDutchenko');
		test('//github.com/OlehDutchenko');

		function test(href: string): void {
			it(href, () => {
				render(<ExternalLink href={href}>link</ExternalLink>);
				const anchor = getLink();
				expect(anchor.dataset.domain).toBe('github.com');
			});
		}
	});

	function getLink(): HTMLAnchorElement {
		return screen.getByRole<HTMLAnchorElement>('link');
	}
});
