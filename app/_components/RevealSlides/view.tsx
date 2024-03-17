'use client';

import dynamic from 'next/dynamic';
import React, { ReactElement } from 'react';
import type { Props } from './Reveal';

const Reveal = dynamic(() => import('./Reveal').then(({ Reveal }) => Reveal), {
	ssr: false,
	loading: () => <p className="reveal-loading">Loading...</p>,
});

export function RevealSlides(props: Props): ReactElement {
	return <Reveal {...props} />;
}