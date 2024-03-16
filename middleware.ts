import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '@/_locales';
import { LocaleHandler } from '@wezom/locale-handler';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest): void | NextResponse {
	const acceptLanguages = request.headers.get('accept-language');

	if (acceptLanguages) {
		const localeHandler = new LocaleHandler({
			acceptLanguages,
			availableLocales: AVAILABLE_LOCALES,
			defaultLocale: DEFAULT_LOCALE,
			url: request.nextUrl,
		});

		if (localeHandler.pathnameHasMissingLocale) {
			const url = localeHandler.getPreferredLocaleUrl();
			return NextResponse.redirect(url);
		}
	}
}

export const config = {
	matcher: ['/((?!api|cv|_next/static|static|_next/image|favicon.ico).*)'],
};
