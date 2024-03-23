import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Root } from './component';

describe('Root', () => {
	const locales = ['en', 'uk'];
	locales.forEach((locale) => {
		it(`should render html with ${locale.toUpperCase()} lang attribute`, () => {
			const container = renderComponent({ locale });
			const html = container.querySelector('html');
			expect(html?.getAttribute('lang')).toBe(locale);
		});
	});
});

function renderComponent({ locale }: { locale: string }): HTMLElement {
	suppressKnownAndAcceptableWarningDuringRender();
	const { container } = render(
		<Root locale={locale}>
			<h1>Hello world!</h1>
		</Root>
	);
	removeSuppressing();

	return container;
}

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
