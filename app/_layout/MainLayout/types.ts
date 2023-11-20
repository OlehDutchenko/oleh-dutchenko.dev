import type { LocaleName } from '@/_locales/constants';
import type { PropsWithChildren } from 'react';
import type { NavLabels } from './components/Nav';

export interface MainLayoutProps extends PropsWithChildren {
	lang: LocaleName;
	navLabels: NavLabels;
}
