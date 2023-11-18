export interface NavProps {
	rootHref: string;
	navLabels: NavLabels;
}

export interface NavLabels {
	homepage: string;
}

export interface NavItem {
	key: string;
	href: string;
	label: string;
}
