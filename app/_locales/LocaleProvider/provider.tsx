import { DEFAULT_LOCALE, Locale } from '@/_locales/constants';
import React from 'react';
import { Context } from './context';

interface LocaleProviderProps {
	children: NonNullable<React.ReactNode>;
	locale?: Locale;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({
	children,
	locale = DEFAULT_LOCALE,
}) => {
	return <Context.Provider value={{ locale }}>{children}</Context.Provider>;
};
