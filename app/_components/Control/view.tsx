import React from 'react';

export interface ControlProps {
	children?: NonNullable<React.ReactNode>;
}

export const Control: React.FC<ControlProps> = ({ children }) => {
	return (
		<div>
			<div>{children}</div>
		</div>
	);
};
