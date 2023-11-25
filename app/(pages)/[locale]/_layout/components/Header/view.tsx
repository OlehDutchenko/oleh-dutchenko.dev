import React from 'react';

interface Props extends React.PropsWithChildren {}

export const Header: React.FC<Props> = ({ children }) => {
	return (
		<>
			<header className="main-layout-header">{children}</header>
			<hr />
		</>
	);
};
