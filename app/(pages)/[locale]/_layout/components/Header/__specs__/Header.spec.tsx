import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Header } from '../view';

describe('Header', () => {
	it('should render <header> element', () => {
		render(
			<Header
				heading={{ label: 'Label', iconAlt: 'Alt' }}
				nav={{
					rootHref: '/',
					items: { blog: 'Blog', about: 'About', envato: 'Envato' },
				}}
			/>
		);
		const header = screen.queryByRole('banner');
		expect(header).toBeInstanceOf(HTMLElement);
	});
});
