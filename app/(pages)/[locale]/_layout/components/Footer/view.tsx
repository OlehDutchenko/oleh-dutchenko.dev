import React from 'react';
import {
	HowThisPageWorks,
	HowThisPageWorksProps,
} from './components/HowThisPageWorks';

export interface FooterProps {
	howThisPageWorks: HowThisPageWorksProps;
}

export const Footer: React.FC<FooterProps> = ({ howThisPageWorks }) => {
	return (
		<footer>
			<HowThisPageWorks
				label={howThisPageWorks.label}
				title={howThisPageWorks.title}
			/>
		</footer>
	);
};
