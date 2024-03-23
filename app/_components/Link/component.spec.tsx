import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { CSS_VAR_DOMAIN, makeCssVarValue } from './components/Extenal';
import { Link } from './component';

const { useParams, usePathname } = vi.hoisted(() => {
	return {
		useParams: vi.fn(() => ({ locale: 'en' })),
		usePathname: vi.fn(() => '/'),
	};
});

vi.mock('next/navigation', () => {
	return {
		useParams,
		usePathname,
	};
});

describe('Link', () => {
	describe('Internal link', () => {
		it('should render <a> element with `href` with url from domain root', () => {
			render(<Link href="/about">link</Link>);
			const anchor = getLink();
			expect(anchor).toHaveAttribute('href', '/about');
		});

		it('should render <a> element with `href` with url from domain root', () => {
			usePathname.mockReturnValueOnce('/fr/pages');
			render(<Link href="./child-page">link</Link>);
			const anchor = getLink();
			expect(anchor).toHaveAttribute('href', `/fr/pages/child-page`);
		});

		it('should render <a> element with localized `href` attr', () => {
			useParams.mockReturnValueOnce({ locale: 'uk' });
			render(<Link href="/[locale]/about">link</Link>);
			const anchor = getLink();
			expect(anchor).toHaveAttribute('href', `/uk/about`);
		});
	});

	describe('External link', () => {
		it('should render <a> element with `target="_blank"` and `rel="noopener noreferrer"` attrs', () => {
			render(<Link href="https://example.com">link</Link>);
			const anchor = getLink();
			expect(anchor).toBeInstanceOf(HTMLElement);
			expect(anchor.target).toBe('_blank');
			expect(anchor.rel).toBe('noopener noreferrer');
		});

		testUnKnownDomain('example.com', [
			'http://example.com',
			'https://www.example.com',
		]);

		testKnownDomain('github.com', [
			'https://github.com/OlehDutchenko',
			'http://github.com/OlehDutchenko',
			'https://www.github.com/OlehDutchenko',
			'//www.github.com/OlehDutchenko',
			'//github.com/OlehDutchenko',
		]);

		testKnownDomain('linkedin.com', [
			'https://linkedin.com/feed/',
			'https://www.linkedin.com/in/OlehDutchenko',
		]);

		testKnownDomain('twitter.com', ['https://www.twitter.com/home']);

		testKnownDomain('gist.github.com', [
			'https://gist.github.com/OlehDutchenko/c561d59c1ec9dbcc9414f6e4274c706d',
		]);

		function testKnownDomain(domain: string, withLinks: string[]): void {
			describe(`should recognize known resource domain: ${domain}`, () => {
				withLinks.forEach((href) => {
					it(href, () => {
						render(<Link href={href}>link</Link>);
						const anchor = getLink();
						const cssVar =
							anchor.style.getPropertyValue(CSS_VAR_DOMAIN);
						expect(cssVar).toBe(makeCssVarValue(domain));
					});
				});
			});
		}

		function testUnKnownDomain(domain: string, withLinks: string[]): void {
			describe(`should not recognize unknown resource domain: ${domain}`, () => {
				withLinks.forEach((href) => {
					it(href, () => {
						render(<Link href={href}>link</Link>);
						const anchor = getLink();
						const cssVar =
							anchor.style.getPropertyValue(CSS_VAR_DOMAIN);
						expect(cssVar).toBe('');
					});
				});
			});
		}
	});

	function getLink(): HTMLAnchorElement {
		return screen.getByRole<HTMLAnchorElement>('link');
	}
});
