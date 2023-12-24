import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Footer } from '../view';

vi.mock('next/navigation', () => {
	return {
		usePathname: () => '/',
		useParams: () => ({ locale: 'en' }),
	};
});

describe('Footer', () => {
	it('should render link "How this page works" (link to the GitHub)', () => {
		const howThisPageWorks = {
			label: 'How this page works?',
			title: 'Title',
		};
		const { container } = render(
			<Footer howThisPageWorks={howThisPageWorks} />
		);

		const link = container.querySelector('a[href*="github.com"]');
		expect(link?.textContent).toBe(howThisPageWorks.label);
		expect(link?.hasAttribute('title')).toBeTruthy();
		expect(link?.getAttribute('target')).toBe('_blank');
		expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
	});
});
