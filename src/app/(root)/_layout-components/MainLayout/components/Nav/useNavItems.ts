import { NavProps } from '@/app/(root)/_layout-components/MainLayout/components/Nav/types';

export function useNavItems(props: NavProps): {
	key: string;
	href: string;
	label: string;
}[] {
	const { rootHref, navLabels } = props;

	return [
		{
			key: 'homepage',
			href: rootHref,
			label: navLabels.homepage,
		},
	];
}
