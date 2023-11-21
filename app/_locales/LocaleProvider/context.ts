import { DEFAULT_LOCALE, Locale } from '@/_locales/constants';
import React from 'react';

export interface LocaleContext {
	locale: Locale;
}

export const Context = React.createContext<LocaleContext>({
	locale: DEFAULT_LOCALE,
});

export const useLocaleContext = (): LocaleContext => React.useContext(Context);
