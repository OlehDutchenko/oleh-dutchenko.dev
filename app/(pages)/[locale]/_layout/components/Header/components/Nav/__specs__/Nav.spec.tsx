import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Nav } from '../view';

describe('Nav', () => {
	it('should render <nav> element with links', () => {
		render(
			<Nav
				rootHref="/test"
				items={{
					blog: 'Blog',
					about: 'About',
					envato: 'Envato',
				}}
			/>
		);
		const nav = screen.queryByRole('navigation');
		expect(nav).toBeInstanceOf(HTMLElement);

		const links = screen.queryAllByRole<HTMLLinkElement>('link');
		expect(links).toHaveLength(3);
		expect(getHref(links[0])).toBe('/test/about');
		expect(getHref(links[1])).toBe('/test/blog');
		expect(getHref(links[2])).toBe('/test/envato');
	});
});

function getHref(link: HTMLLinkElement): string | null {
	return link.getAttribute('href');
}
