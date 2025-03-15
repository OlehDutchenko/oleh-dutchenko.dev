import { routing } from '@/_routing/navigation';
import createI18nMiddleware from 'next-intl/middleware';

export default createI18nMiddleware(routing);

export const config = {
	matcher: [
		'/((?!api|cv|slides|static|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
	],
};
