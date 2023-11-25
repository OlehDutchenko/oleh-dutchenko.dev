import { Locale } from '@/_locales/constants';

export interface PageProps<
	Params extends Record<string, any> = Record<string, any>,
> {
	params: { locale: Locale } & Params;
	searchParams: Record<string, string | string[] | undefined>;
}
