import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Header } from './component';

vi.mock('next/navigation', () => {
	return {
		useRouter: () => ({ push: () => undefined }),
		usePathname: () => '/',
		useParams: () => ({ locale: 'en' }),
	};
});

describe('Header', () => {
	it('should render <header> element', () => {
		render(
			<Header
				heading={{ label: 'Label', iconAlt: 'Alt' }}
				nav={{
					rootHref: '/',
					description: 'Description',
					items: { talks: 'Talks' },
				}}
				localeSwitcher={{
					description: 'Description',
					options: [],
				}}
			/>
		);
		const header = screen.queryByRole('banner');
		expect(header).toBeInstanceOf(HTMLElement);
	});
});
