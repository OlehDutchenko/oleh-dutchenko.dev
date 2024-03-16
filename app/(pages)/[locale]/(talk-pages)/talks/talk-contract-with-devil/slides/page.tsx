import { RevealSlides } from '@/_components/RevealSlides';
import { generateStaticParams } from '@/_locales';
import React from 'react';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

export { generateStaticParams };

export default function Page(): React.ReactElement {
	return (
		<RevealSlides>
			<section>Slide 1</section>
			<section>Slide 2</section>
		</RevealSlides>
	);
}
