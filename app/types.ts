import { LocaleName } from '@/_locales/types';

export interface PageProps<Params extends Record<string, any> = Record<string, any>> {
	params: { locale: LocaleName } & Params;
	searchParams: Record<string, string | string[] | undefined>
}