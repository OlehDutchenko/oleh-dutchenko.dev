import { usePathname } from '@/_routing/navigation';
import { assertUnreachable } from '@/_utils/assert-unreachable';

export type MatchType = 'startsWith' | 'exact';

export function useIsActiveSection(
	href: string,
	match: MatchType = 'startsWith'
): boolean {
	const pathname = usePathname();
	switch (match) {
		case 'startsWith':
			return pathname.startsWith(href);
		case 'exact':
			return pathname === href;
		default:
			assertUnreachable(match);
	}
}
