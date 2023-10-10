import { PropsWithChildren, ReactElement } from 'react';
import './globals.css';

function RootLayout(props: PropsWithChildren): ReactElement {
	return (
		<html lang="uk">
			<body>{props.children}</body>
		</html>
	);
}

export { RootLayout as default };
