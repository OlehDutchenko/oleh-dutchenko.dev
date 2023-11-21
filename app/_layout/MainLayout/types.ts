import type { PropsWithChildren } from 'react';
import type { NavProps } from './components/Nav';

export interface MainLayoutProps extends PropsWithChildren {
	locale: NavProps['locale'];
}
