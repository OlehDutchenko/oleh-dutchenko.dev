import React from 'react';

interface Props extends React.PropsWithChildren {}

export const Main: React.FC<Props> = (props) => {
	return <main>{props.children}</main>;
};
