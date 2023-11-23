import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { Translations } from '../translations';
import { MainLayout } from '../view';

describe('MainLayout', () => {
	it('should render html with lang attribute', async () => {
		const translations = await loadUkTranslations();
		const { container } = render(
			<MainLayout locale="uk" translations={translations}>
				Test
			</MainLayout>
		);

		const $html = container.querySelector('html');
		expect($html?.getAttribute('lang')).toBe('uk');
	});
});

async function loadUkTranslations(): Promise<Translations> {
	return await import('../translations/uk').then((module) => module.default);
}
