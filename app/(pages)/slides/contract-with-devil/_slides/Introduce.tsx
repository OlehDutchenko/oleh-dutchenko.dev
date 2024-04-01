import { ReactElement } from 'react';

export function Introduce(): ReactElement {
	return (
		<section
			data-background-color="black"
			data-transition="zoom-in fade-out"
			data-transition-speed="slow"
			className="section-question"
		>
			<h1>&nbsp;</h1>
			<p>Дозвольте представитись</p>
		</section>
	);
}
