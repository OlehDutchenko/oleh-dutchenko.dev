import { NavItem, NavProps } from './types';

export function useNavItems(props: NavProps): NavItem[] {
	const { rootHref, navLabels } = props;
	return [
		{
			key: 'homepage',
			href: rootHref,
			label: navLabels.homepage,
		},
	];
}
