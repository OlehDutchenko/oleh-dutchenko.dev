import { LocaleHandler } from '@wezom/locale-handler';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest): void | NextResponse {
	const acceptLanguages = request.headers.get('accept-language');
	const availableLocales = process.env.AVAILABLE_LOCALES?.split(',');
	const defaultLocale = process.env.DEFAULT_LOCALE;

	if (acceptLanguages && availableLocales && defaultLocale) {
		const localeHandler = new LocaleHandler({
			acceptLanguages,
			availableLocales,
			defaultLocale,
			url: request.nextUrl,
		});

		if (localeHandler.pathnameHasMissingLocale) {
			const url = localeHandler.getPreferredLocaleUrl();
			return NextResponse.redirect(url);
		}
	}
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
