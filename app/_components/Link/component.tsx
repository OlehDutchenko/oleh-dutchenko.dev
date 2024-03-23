import { PropsWithChildren, ReactElement } from 'react';
import { External } from './components/Extenal';
import { Internal, LOCALE_START_REGEXP } from './components/Internal';

interface Props extends PropsWithChildren {
	href: string;
	className?: string;
	title?: string;
}

export function Link(props: Props): ReactElement {
	return isInternal(props.href) ? (
		<Internal {...props} />
	) : (
		<External {...props} />
	);
}

function isInternal(href: string): boolean {
	return LOCALE_START_REGEXP.test(href) || /^\.?\/[a-z]/.test(href);
}
