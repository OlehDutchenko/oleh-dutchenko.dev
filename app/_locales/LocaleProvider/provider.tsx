import { DEFAULT_LOCALE, LocaleName } from '@/_locales/constants';
import React from 'react';
import { Context } from './context';

interface LocaleProviderProps {
	children: NonNullable<React.ReactNode>;
	locale?: LocaleName;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({
	children,
	locale = DEFAULT_LOCALE,
}) => {
	return <Context.Provider value={{ locale }}>{children}</Context.Provider>;
};
