import Image from 'next/image';
import React from 'react';

export interface HeadingProps {
	label: string;
	iconAlt: string;
}

export const Heading: React.FC<HeadingProps> = ({ label, iconAlt }) => {
	return (
		<h1 className="main-layout-header__heading" aria-label={label}>
			<Image
				width="72"
				height="69"
				src="/static/icon.svg"
				alt={iconAlt}
				className="main-layout-header__heading-icon"
				draggable="false"
				aria-hidden="true"
			/>
		</h1>
	);
};
