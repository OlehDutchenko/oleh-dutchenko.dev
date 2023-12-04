import { CSS_VAR_DOMAIN } from '@/_components/ExternalLink/constants';
import { makeCssVarValue } from '@/_components/ExternalLink/makeCssVarValue';
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
					render(<ExternalLink href={href}>link</ExternalLink>);
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
					render(<ExternalLink href={href}>link</ExternalLink>);
					const anchor = getLink();
					const cssVar =
						anchor.style.getPropertyValue(CSS_VAR_DOMAIN);
					expect(cssVar).toBe('');
				});
			});
		});
	}

	function getLink(): HTMLAnchorElement {
		return screen.getByRole<HTMLAnchorElement>('link');
	}
});
