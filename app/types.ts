import type { Locale } from '@/_locales/constants';
import React from 'react';

export interface LayoutProps<
	Params extends Record<string, any> = Record<string, any>,
> {
	params: { locale: Locale } & Params;
	children: NonNullable<React.ReactNode>;
}

export interface PageProps<
	Params extends Record<string, any> = Record<string, any>,
> {
	params: { locale: Locale } & Params;
	searchParams: Record<string, string | string[] | undefined>;
}
