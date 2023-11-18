import React from 'react';
import { MainProps } from './types';

export const Main: React.FC<MainProps> = (props) => {
	return <main>{props.children}</main>;
};
