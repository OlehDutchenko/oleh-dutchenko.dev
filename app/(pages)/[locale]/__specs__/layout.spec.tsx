import type { LayoutProps } from '@/_types/layout-props';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Layout from '../layout';

vi.mock('next/navigation', () => {
	return {
		useRouter: () => ({ push: () => undefined }),
		usePathname: () => '/',
		useParams: () => ({ locale: 'en' }),
	};
});

describe('Layout', () => {
	const locales = ['en', 'uk'] as const;
	locales.forEach((locale) => {
		it(`should render html with ${locale.toUpperCase()} lang attribute`, async () => {
			const { container } = await renderLayout({ locale });
			const html = container.querySelector('html');
			expect(html?.getAttribute('lang')).toBe(locale);
		});
	});
});

async function renderLayout({
	children = 'Test',
	locale = 'en',
}: RenderLayoutProps = {}): Promise<ReturnType<typeof render>> {
	const layoutJSX = await Layout({
		children,
		params: {
			locale,
		},
	});

	suppressKnownAndAcceptableWarningDuringRender();
	const renderResult = render(layoutJSX);
	removeSuppressing();

	return renderResult;
}
interface RenderLayoutProps {
	children?: LayoutProps['children'];
	locale?: LayoutProps['params']['locale'];
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
