import type { PropsWithChildren } from 'react';
import type { NavLabels } from './components/Nav';

export interface MainLayoutProps extends PropsWithChildren {
	lang: 'en' | 'uk';
	navLabels: NavLabels;
}
