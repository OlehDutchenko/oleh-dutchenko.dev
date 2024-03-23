import { PropsWithChildren, ReactNode } from 'react';
import './globals.css';

export default function RootLayout(props: PropsWithChildren): ReactNode {
	return props.children;
}
