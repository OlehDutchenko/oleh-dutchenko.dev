import type { LocaleName } from '@/_locales/constants';

export interface NavProps {
	locale: LocaleName;
}

export interface NavItem {
	key: string;
	href: string;
	label: string;
}
