import { DEFAULT_LOCALE, LocaleName } from '@/_locales/constants';
import React from 'react';

export interface LocaleContext {
	locale: LocaleName;
}

export const Context = React.createContext<LocaleContext>({
	locale: DEFAULT_LOCALE,
});

export const useLocaleContext = (): LocaleContext => React.useContext(Context);