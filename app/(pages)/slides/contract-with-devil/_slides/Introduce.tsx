import { ReactElement } from 'react';

export function Introduce(): ReactElement {
	return (
		<section
			data-background-color="dimgray"
			data-transition="zoom-in slide-out"
			data-transition-speed="slow"
		>
			<p>Дозвольте представитись</p>
		</section>
	);
}
