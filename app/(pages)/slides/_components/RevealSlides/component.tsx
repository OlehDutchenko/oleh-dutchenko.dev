'use client';

import dynamic from 'next/dynamic';
import { ReactElement, Suspense } from 'react';
import { type Props } from './components/Reveal';

const Reveal = dynamic(
	() => import('./components/Reveal').then((m) => m.Reveal),
	{ ssr: false }
);

export function RevealSlides(props: Props): ReactElement {
	return (
		<Suspense fallback="Loading...">
			<Reveal {...props} />
		</Suspense>
	);
}
