import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export interface ItemProps {
	href: string;
	label: string;
}

export const Item: React.FC<ItemProps> = ({ label, href }: ItemProps) => {
	const datasetActive = useActiveDatasetValue(href);
	return (
		<Link href={href} data-active={datasetActive}>
			{label}
		</Link>
	);
};

function useActiveDatasetValue(href: string): string | undefined {
	const pathname = usePathname();
	return pathname.startsWith(href) ? '' : undefined;
}
