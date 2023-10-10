import React from 'react';
import { MainContentProps } from './types';

export const MainContent: React.FC<MainContentProps> = (props) => {
	return <main>{props.children}</main>;
};
