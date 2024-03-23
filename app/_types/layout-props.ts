import { Locale } from '@/_locales';
import { ReactNode } from 'react';

export interface LayoutProps<
	Params extends Record<string, any> = Record<string, any>,
> {
	params: { locale: Locale } & Params;
	children: NonNullable<ReactNode>;
}
