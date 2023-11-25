import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Layout from '../layout';

describe('Layout', () => {
	const locales = ['en', 'uk'] as const;
	locales.forEach((locale) => {
		it(`should render html with ${locale.toUpperCase()} lang attribute`, async () => {
			const layoutJSX = await Layout({
				children: 'Test',
				params: {
					locale,
				},
			});

			suppressKnownAndAcceptableWarningDuringRender();
			const { container } = render(layoutJSX);
			removeSuppressing();

			const html = container.querySelector('html');
			expect(html?.getAttribute('lang')).toBe(locale);
		});
	});
});

function suppressKnownAndAcceptableWarningDuringRender(): void {
	const consoleError = console.error;
	vi.stubGlobal('console', {
		...console,
		error(message: string | undefined, ...args: any): void {
			const [who, where] = args;
			if (
				who === '<html>' &&
				message?.includes('cannot appear as a child of') &&
				where === 'div'
			) {
				return undefined;
			}
			consoleError(message, ...args);
		},
	});
}

function removeSuppressing(): void {
	vi.unstubAllGlobals();
}
