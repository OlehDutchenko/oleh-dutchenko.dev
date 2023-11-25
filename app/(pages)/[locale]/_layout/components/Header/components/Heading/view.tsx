import Image from 'next/image';
import React from 'react';

export interface HeadingProps {
	translations: {
		heading: {
			label: string;
			icon: string;
		};
	};
}

export const Heading: React.FC<HeadingProps> = ({ translations }) => {
	return (
		<h1
			className="main-layout-header__heading"
			aria-label={translations.heading.label}
		>
			<Image
				width="72"
				height="69"
				src="/static/icon.svg"
				alt={translations.heading.icon}
				className="main-layout-header__heading-icon"
				draggable="false"
				aria-hidden="true"
			/>
		</h1>
	);
};
