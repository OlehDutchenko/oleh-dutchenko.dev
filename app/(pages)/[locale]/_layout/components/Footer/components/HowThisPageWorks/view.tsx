'use client';

import React from 'react';
import 'client-only';

export interface HowThisPageWorksProps {
	label: string;
	title: string;
}

export const HowThisPageWorks: React.FC<HowThisPageWorksProps> = (props) => {
	return (
		<a title={props.title} href="https://github.com/">
			{props.label}
		</a>
	);
};
