import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Nav, NavProps } from '../view';

const { usePathname } = vi.hoisted(() => {
	return {
		usePathname: vi.fn(() => '/'),
	};
});

vi.mock('next/navigation', () => {
	return { usePathname };
});

describe('Nav', () => {
	it('should render <nav> element with links and `aria-label` attr', () => {
		const description = 'Description';
		defaultRender({ description, rootHref: '/test' });

		const nav = screen.queryByRole('navigation');
		expect(nav).toBeInstanceOf(HTMLElement);
		expect(nav?.getAttribute('aria-label')).toBe(description);

		const links = screen.queryAllByRole<HTMLLinkElement>('link');
		expect(links).toHaveLength(3);
		expect(getHref(links[0])).toBe('/test/about');
		expect(getHref(links[1])).toBe('/test/blog');
		expect(getHref(links[2])).toBe('/test/envato');
	});

	it('should render active element', () => {
		const rootHref = '/test';
		const itemHref = '/blog';
		vi.mocked(usePathname).mockImplementation(() => rootHref + itemHref);
		defaultRender({ rootHref });

		const links = screen.queryAllByRole<HTMLLinkElement>('link');
		const activeLinks = links.filter((link) =>
			link.hasAttribute('data-active')
		);
		expect(activeLinks).toHaveLength(1);
		expect(activeLinks[0].href.includes(itemHref)).toBe(true);
	});
});

function defaultRender(props: Partial<NavProps> = {}): void {
	const {
		description = 'Description',
		rootHref = '/',
		items = {
			blog: 'Blog',
			about: 'About',
			envato: 'Envato',
		},
	} = props;

	render(<Nav description={description} rootHref={rootHref} items={items} />);
}

function getHref(link: HTMLLinkElement): string | null {
	return link.getAttribute('href');
}
