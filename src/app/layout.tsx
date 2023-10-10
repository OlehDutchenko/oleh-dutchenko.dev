import React from 'react';
import './globals.css';

const RootLayout: React.FC<React.PropsWithChildren> = (props) => {
	return (
		<html lang="uk">
			<body>{props.children}</body>
		</html>
	);
}

export { RootLayout as default };
