import { routing } from '@/_routing/navigation';
import createI18nMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
	if (request.nextUrl.pathname.match(/\.well-known\/.*/i)) {
		return NextResponse.next();
	}
	const handleI18nRouting = createI18nMiddleware(routing);
	return handleI18nRouting(request);
}

export const config = {
	matcher: [
		'/((?!api|cv|slides|static|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
	],
};
