'use client';

import { ReactElement, useEffect, useState } from 'react';
import { Reveal, Props } from './components/Reveal';

export function RevealSlides(props: Props): ReactElement {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	return isBrowser ? <Reveal {...props} /> : <>Loading</>;
}
