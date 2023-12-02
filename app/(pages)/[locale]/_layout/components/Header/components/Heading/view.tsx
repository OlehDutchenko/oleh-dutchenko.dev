import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css';

export interface HeadingProps {
	label: string;
	iconAlt: string;
}

export const Heading: React.FC<HeadingProps> = ({ label, iconAlt }) => {
	return (
		<h1 className={styles.heading} aria-label={label}>
			<Image
				width="72"
				height="69"
				src="/static/icon.svg"
				alt={iconAlt}
				className={styles.img}
				draggable="false"
				aria-hidden="true"
			/>
		</h1>
	);
};
